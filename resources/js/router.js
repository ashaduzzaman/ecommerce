import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import testPage from './test'

import accountRoutes from '../../Modules/Accounts/Resources/assets/js/router/index'

const defaultRoutes = [
    {
        path: '/test',
        component: testPage
    }
]

var routes = []

routes = routes.concat(
    defaultRoutes,
    accountRoutes
)

export default new VueRouter({
    mode: 'history',
    routes
})
