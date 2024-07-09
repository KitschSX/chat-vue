import { createRouter, createWebHistory } from 'vue-router';
import Chat from '../views/ChatPage.vue';
import FlappyBird from '../views/BirdPage.vue';

const routes = [
    {
        path: '/',
        name: 'Chat',
        component: Chat,
    },
    {
        path: '/bird',
        name: 'FlappyBird',
        component: FlappyBird,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
