import { createRouter, createWebHistory } from 'vue-router'
import CoachesList from '@/views/coaches/CoachesListView.vue';
import RequestsView from '@/views/requests/RequestsView.vue';
import CoachesDetails from '@/views/coaches/CoachesDetailsView.vue';
import ContactCoach from '@/views/requests/ContactCoachView.vue';
import CoachesRegistration from '@/views/coaches/CoachesRegistrationView.vue';
import NotFound from '@/views/NotFound.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: {name: 'coaches'}
        },
        {
            path: '/coaches',
            name: 'coaches',
            component: CoachesList
        },
        {
            path: '/coaches/:id',
            name: 'coach',
            component: CoachesDetails,
            props: true,
            children: [{
                path: 'contact',
                name: 'contact-coach',
                component: ContactCoach,
            }]
        },
        {
            path: '/register',
            name: 'register',
            component: CoachesRegistration
        },
        {
            path: '/requests',
            name: 'requests',
            component: RequestsView
        },
        {
            path: '/notFound(.*)',
            name: 'not-found',
            component: NotFound
        },
    ]
})

export default router
