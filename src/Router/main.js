import { createRouter , createWebHistory } from "vue-router";
import Layout_Home from '../Modules/Home/Layout/LayoutHome.vue';
import About from '../Modules/About/Components/Abouts.vue';
const routers = [
    {
        path: '/',
        name: 'Layout_Home',
        component: Layout_Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers,
});
export default router;