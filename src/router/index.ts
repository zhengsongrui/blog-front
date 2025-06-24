import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/home/Home.vue";
import SearchArticle from "../pages/searchArticle/SearchArticle.vue";
import ArticleDetail from "../pages/articleDetail/ArticleDetail.vue"

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
            path: '/searchArticle',
            name: 'searchArticle',
            component: SearchArticle
        },
        {
             path: '/articleDetail',
            name: 'articleDetail',
            component: ArticleDetail
        }
    ]
})

export default router
