import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import { createPinia } from 'pinia'
import routeNames from '@/constants/routeNames.js'
import HomeView from '@/views/HomeView.vue'
import PlanView from '@/views/PlanView.vue'
import PriceView from '@/views/PriceView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import QuestionnaireView from '@/views/QuestionnaireView.vue'

const routes = [
    { path: '/', name: routeNames.MAIN, component: HomeView },
    { path: '/plan', name: routeNames.PLAN, component: PlanView },
    { path: '/price', name: routeNames.PRICE, component: PriceView },
    { path: '/portfolio', name: routeNames.PORTFOLIO, component: PortfolioView },
    { path: '/questions', name: routeNames.QUASTIONNAIRE, component: QuestionnaireView }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        return { top: 0 }
    }
})

const urlParams = new URLSearchParams(window.location.search);
const redirect = urlParams.get('redirect');
if (redirect) {
    window.history.replaceState(null, '', redirect);
}

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')