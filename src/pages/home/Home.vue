<script setup lang="ts">
import CategoryList from "./components/CategoryList.vue";
import ArticleListItem from "@/pages/home/components/ArticleListItem.vue";
import useHome from "./hooks/useHome";
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
let { editModel } = storeToRefs(useUserStore())
let {
    articleListData,
    getArticleByPage,
    homeLoading,
    paginationData,
    nowSelectCategory,
    setNowSelectCategory
} = useHome()
// 获取分类和文章
getArticleByPage()
</script>

<template>
    <div class="home" v-loading="homeLoading">
        <!-- 分类列表 -->
        <CategoryList 
            :getArticleByPage="getArticleByPage"
            :nowSelectCategory="nowSelectCategory" 
            :setNowSelectCategory="setNowSelectCategory"
            :editModel="editModel" 
        />
        <!-- 文章列表 -->
        <div class="articleList">
            <div class="addArticle" v-if="editModel"> 
                <span>+ 新增文章</span> 
            </div>
            <template v-for="item in articleListData" :key="item.id">
                <ArticleListItem :itemData="item" :editModel="editModel" />
            </template>
        </div>
        <!-- 分页器 -->
        <el-pagination :current-page="paginationData.pagenum" :page-size="paginationData.pagesize" :pager-count="11"
            layout="prev, pager, next" :total="paginationData.total"
            @current-change="(currentPage: number) => { getArticleByPage(currentPage) }" />
    </div>
</template>

<style lang="less" scoped>
.home {
    padding: 10px;
    flex: 1;

    .addArticle {
        display: flex;
        justify-content: center;
        align-items: center;
        color:#409eff;
        border: 2px solid #409eff;
        border-radius: 8px;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
        padding: 30px 0;
        cursor: pointer;
        transition: all .25s linear;
        &:hover {
            color:  rgb(121.3, 187.1, 255);
            border: 2px solid  rgb(121.3, 187.1, 255);
        }
    }
}
</style>

<style lang="less">
.el-pager li,
.el-pagination button {
    background: transparent !important;
}
</style>