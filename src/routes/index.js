import {createRouter, createWebHistory} from "vue-router";
import About from "@/pages/About.vue";
import Home from '@/pages/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', name:'home', component:Home},
        {path:'/about', name:'about', component:About},

    ]
})

export default router;