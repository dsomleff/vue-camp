import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: {name: 'coaches'}
        },
        {
            path: '/coaches',
            name: 'coaches',
            component: null
        },
        {
            path: '/coaches/:id',
            name: 'coach',
            component: null,
            children: [{
                path: '/contact',
                name: 'contact-coach',
                component: null,
            }]
        },
        {
            path: '/register',
            name: 'register',
            component: null
        },
        {
            path: '/requests',
            name: 'requests',
            component: null
        },
        {
            path: '/notFound(.*)',
            name: 'not-found',
            component: null
        },
    ]
})

export default router
