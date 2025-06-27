import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/home/Home.vue";
import ArticleDetail from "../pages/articleDetail/ArticleDetail.vue"
import EditCategory from '../pages/editCategory/editCategory.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/articleDetail/:id',
            name: 'articleDetail',
            component: ArticleDetail
        },
        {
            path: '/editCategory',
            name: 'editCategory',
            component: EditCategory
        },
    ]
})

export default router
