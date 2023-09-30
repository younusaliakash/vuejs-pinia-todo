import { createRouter, createWebHistory } from 'vue-router';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import Todo from './components/Todo.vue';
import { useAuthStore } from './store/store';

const routes = [
    { path: '/', component: Register },
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard },
    // {
    //     path: '/dashboard', component: Dashboard, meta: { requiresAuth: true }, // Add meta field to specify the route requires authentication
    //     beforeEnter: (to, from, next) => {
    //         const $authStore = useAuthStore();
    //         if ($authStore.currentUser) {
    //             // If user is logged in, allow access to the dashboard
    //             next();
    //         } else {
    //             // If user is not logged in, redirect to login page
    //             next('/login');
    //         }
    //     },
    // },
    {
        path: '/todo', component: Todo, meta: { requiresAuth: true }, // Add meta field to specify the route requires authentication
        beforeEnter: (to, from, next) => {
            const $authStore = useAuthStore();
            if ($authStore.currentUser) {
                // If user is logged in, allow access to the dashboard
                next();
            } else {
                // If user is not logged in, redirect to login page
                next('/login');
            }
        },
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});