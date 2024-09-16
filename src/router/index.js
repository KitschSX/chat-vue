import {createRouter, createWebHistory} from 'vue-router';
import Chat from '@/views/Home/ChatPage.vue';
import FlappyBird from '@/views/Home/BirdPage.vue';
import Layout from "@/views/Layout/Layout.vue";
import Login from '@/views/Login/index.vue'
const routes = [
    {
        path: '/',
        name: 'Main',
        component: Layout,
        children: [
            {
                path: '',
                name: 'Chat',
                component: Chat,
            },
            {
                path: '/bird',
                name: 'FlappyBird',
                component: FlappyBird,
            },
        ]
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
