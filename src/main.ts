import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import routeNames from '@/constants/routeNames.js'
import { langs } from '@/constants/texts'
import { useDictionaryStore } from '@/utils/dictionary/dictionary'
import HomeView from '@/views/HomeView.vue'
import PlanView from '@/views/PlanView.vue'
import PriceView from '@/views/PriceView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import QuestionnaireView from '@/views/QuestionnaireView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  { path: '/:locale(da)?/', name: routeNames.MAIN, component: HomeView, meta: { page: 'home' } },
  { path: '/:locale(da)?/plan/', name: routeNames.PLAN, component: PlanView, meta: { page: 'plan' } },
  { path: '/:locale(da)?/price/', name: routeNames.PRICE, component: PriceView, meta: { page: 'price' } },
  { path: '/:locale(da)?/portfolio/', name: routeNames.PORTFOLIO, component: PortfolioView, meta: { page: 'portfolio' } },
  { path: '/questions/', name: routeNames.QUASTIONNAIRE, component: QuestionnaireView },
  { path: '/404/', name: 'NOT_FOUND', component: NotFoundView },
  { path: '/:pathMatch(.*)*', component: NotFoundView },
]

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
}, ({ app, router }) => {
  const pinia = createPinia()
  app.use(pinia)
  router.beforeEach(to => {
    useDictionaryStore(pinia).setDict(to.params.locale === 'da' ? langs.DK : langs.EN)
  })
}, { hydration: true })

export function includedRoutes() {
  return ['/', '/price/', '/plan/', '/portfolio/', '/da/', '/da/price/', '/da/plan/', '/da/portfolio/', '/questions/', '/404/']
}
