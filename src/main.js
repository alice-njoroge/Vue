import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {createRouter, createWebHistory} from "vue-router";

import App from './App.vue'

import About from "@/pages/About.vue";
import Home from '@/pages/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', name:'home', component:Home},
        {path:'/about', name:'about', component:About},

    ]
})

const app = Vue.createApp(App)
    .use(router)
    .use(VueAxios, axios)
app.mount('#app')


