import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'

export const siteUrl = 'https://beautybysoroka.com'
export const pages = {
  home: {
    path: '/',
    en: { title: 'Makeup Artist in Copenhagen | Beauty by Soroka', heading: 'Makeup & Hair in Copenhagen', description: 'Makeup artist and hairstylist in Copenhagen for weddings, maternity and commercial photoshoots. View Maria’s portfolio, bridal packages and prices.' },
    da: { title: 'Makeupartist i København | Beauty by Soroka', heading: 'Makeup og hårstyling i København', description: 'Makeupartist og hårstylist i København til bryllupper, graviditetsfotografering og kommercielle fotoshoots. Se Marias portfolio, brudepakker og priser.' },
  },
  price: {
    path: '/price/',
    en: { title: 'Makeup & Hair Prices in Copenhagen | Beauty by Soroka', heading: 'Makeup & Hair Prices in Copenhagen', description: 'See makeup and hair prices in Copenhagen: bridal styling, bridesmaid packages and a photoshoot offer. Bridal makeup or hair DKK 1,500; both DKK 2,300.' },
    da: { title: 'Priser på makeup og hår i København | Beauty by Soroka', heading: 'Priser på makeup og hårstyling i København', description: 'Se priser på makeup og hår i København: brudepakker, brudepiger og et fotoshoot-tilbud. Brudemakeup eller hår 1.500 kr.; begge dele 2.300 kr.' },
  },
  plan: {
    path: '/plan/',
    en: { title: 'Prepare for Your Makeup & Hair Appointment | Beauty by Soroka', heading: 'Prepare for Your Makeup & Hair Appointment', description: 'Get ready for your makeup and hairstyling appointment. Read tips on hair, skincare and preparing a well-lit space for your stylist.' },
    da: { title: 'Forberedelse til makeup og hårstyling | Beauty by Soroka', heading: 'Forberedelse til makeup og hårstyling', description: 'Bliv klar til din makeup og hårstyling. Læs råd om hår, hudpleje og klargøring af et sted med godt lys til din stylist.' },
  },
  portfolio: {
    path: '/portfolio/',
    en: { title: 'Bridal Makeup & Hair Portfolio | Beauty by Soroka', heading: 'Makeup & Hair Portfolio', description: 'View bridal makeup, wedding hairstyles and photoshoot looks by Copenhagen makeup artist Maria. Explore her work for brides and commercial photography.' },
    da: { title: 'Portfolio med brudemakeup og hår | Beauty by Soroka', heading: 'Portfolio med makeup og hårstyling', description: 'Se brudemakeup, bryllupsfrisurer og looks til fotoshoots af makeupartist Maria i København. Find inspiration til dit bryllup eller kommercielle fotoshoot.' },
  },
}

export function usePageSeo() {
  const route = useRoute()
  const page = computed(() => pages[route.meta.page as keyof typeof pages])
  const language = computed(() => route.params.locale === 'da' ? 'da' : 'en')
  const heading = computed(() => page.value?.[language.value].heading)
  useHead(() => {
    const data = page.value?.[language.value]
    const url = page.value ? siteUrl + (language.value === 'da' ? '/da' : '') + page.value.path : undefined
    const title = data?.title ?? (route.name === 'QUASTIONNAIRE' ? 'Booking Request | Beauty by Soroka' : 'Page Not Found | Beauty by Soroka')
    return {
      title,
      htmlAttrs: { lang: language.value },
      meta: [
        { name: 'description', content: data?.description ?? 'Beauty by Soroka, makeup and hairstyling in Copenhagen.' },
        { name: 'robots', content: data ? 'index, follow' : 'noindex, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Beauty by Soroka' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: data?.description ?? '' },
        { property: 'og:url', content: url ?? siteUrl + route.path },
        { property: 'og:locale', content: language.value === 'da' ? 'da_DK' : 'en_GB' },
        { property: 'og:image', content: siteUrl + '/assets/img/photos/home/Mariia.webp' },
        { property: 'og:image:alt', content: 'Maria — Beauty by Soroka' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: url && page.value ? [
        { rel: 'canonical', href: url },
        { rel: 'alternate', hreflang: 'en', href: siteUrl + page.value.path },
        { rel: 'alternate', hreflang: 'da', href: siteUrl + '/da' + page.value.path },
        { rel: 'alternate', hreflang: 'x-default', href: siteUrl + page.value.path },
      ] : [],
    }
  })
  return { heading }
}
