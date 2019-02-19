import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/detail',
            name: 'detail',
            redirect: '/detail/count',
            component: () => import('./views/detail'),
            children: [
                {
                    path: 'count',
                    name: 'count',
                    component: () => import('./views/detail/count.vue')
                },
                {
                    path: 'forecast',
                    name: 'forecast',
                    component: () => import('./views/detail/forecast.vue')
                },
                {
                    path: 'analysis',
                    name: 'analysis',
                    component: () => import('./views/detail/analysis.vue')
                },
                {
                    path: 'publish',
                    name: 'publish',
                    component: () => import('./views/detail/publish.vue')
                },
         ]
        }
    ]
})