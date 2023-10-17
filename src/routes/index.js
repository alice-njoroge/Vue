import {createRouter, createWebHistory} from "vue-router";
import Home from '@/pages/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', name:'home', component:Home},
        {path:'/about', name:'about', component:()=> import('@/pages/About.vue')},
        {path:'/contact', name:'contact', component:()=> import('@/pages/contact.vue')},

    ]
})

export default router;