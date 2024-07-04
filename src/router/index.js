import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Booking from '../views/Booking.vue';
import Events from '../views/Events.vue';
import Exposition from '../views/Exposition.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/exposition',
        name: 'Exposition',
        component: Exposition
    },
    {
        path: '/booking',
        name: 'Booking',
        component: Booking
    },
    {
        path: '/events',
        name: 'Events',
        component: Events
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;