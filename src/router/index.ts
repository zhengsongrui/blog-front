import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "../pages/home/Home.vue";
import ArticleDetail from "../pages/articleDetail/ArticleDetail.vue"
import EditCategory from '../pages/editCategory/EditCategory.vue';
import EditArticle from '../pages/editArticle/EditArticle.vue'

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
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
        {
            path: '/editArticle/:id',
            name: 'editArticle',
            component: EditArticle
        },
        
    ]
})

export default router
