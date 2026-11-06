import { readdir, readFile, writeFile, copyFile } from 'node:fs/promises'
import assert from 'node:assert/strict'

const origin = 'https://beautybysoroka.com'
const files = await readdir('dist', { recursive: true })
const entries = []
for (const file of files.filter(file => file.endsWith('.html'))) {
  const html = await readFile(`dist/${file}`, 'utf8')
  assert.equal((html.match(/<title>/g) || []).length, 1, `${file}: one title required`)
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${file}: one main heading required`)
  if (html.includes('noindex')) continue
  const canonical = html.match(/<link\b(?=[^>]*rel="canonical")(?=[^>]*href="([^"]+)")[^>]*>/g) || []
  assert.equal(canonical.length, 1, `${file}: one canonical required`)
  const url = canonical[0].match(/href="([^"]+)"/)[1]
  assert.ok(url.startsWith(origin + '/'), `${file}: invalid origin`)
  const language = url.includes('/da/') ? 'da' : 'en'
  assert.ok(html.includes(`lang="${language}"`), `${file}: wrong document language`)
  if (language === 'da') {
    assert.ok(html.includes('href="/da/price/"'), `${file}: navigation loses Danish locale`)
    assert.ok(!html.includes('href="/price/" class="menu-link'), `${file}: English menu link on Danish page`)
  }
  const alternates = html.match(/<link\b(?=[^>]*rel="alternate")(?=[^>]*hreflang=)[^>]*>/g) || []
  assert.equal(alternates.length, 3, `${file}: missing language alternatives`)
  entries.push({ url, alternates })
  if (url.endsWith('/price/')) {
    assert.ok(html.includes('2300 dkk'), `${file}: prices missing from prerendered HTML`)
    assert.ok(html.includes(url.includes('/da/') ? 'Brud + 1 brudepige' : 'Bride + 1 Bridesmaid'), `${file}: wrong language`)
  }
}
assert.equal(entries.length, 8, 'Expected four public pages in two languages')
const urls = new Set(entries.map(entry => entry.url))
const xml = entries.map(({ url, alternates }) => {
  const links = alternates.map(tag => {
    const lang = tag.match(/hreflang="([^"]+)"/)[1]
    const href = tag.match(/href="([^"]+)"/)[1]
    assert.ok(urls.has(href), `Missing language target ${href}`)
    return `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`
  }).join('\n')
  return `  <url>\n    <loc>${url}</loc>\n${links}\n  </url>`
}).join('\n')
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${xml}\n</urlset>\n`)
await copyFile('dist/404/index.html', 'dist/404.html')
await copyFile('CNAME', 'dist/CNAME')
await writeFile('dist/.nojekyll', '')
console.log(`SEO checks passed: ${entries.length} indexed pages; sitemap and 404 generated.`)
