<script setup lang="ts">
import CategoryList from "./components/CategoryList.vue";
import ArticleListItem from "@/components/ArticleListItem.vue";
import useHome from "./hooks/useHome";

let {
    articleListData,
    getArticleByPage,
    categoryList,
    getCategoryList,
    homeLoading,
    paginationData,
    nowSelectCategory,
    setNowSelectCategory
} = useHome()

getCategoryList()
getArticleByPage()
</script>

<template>
    <div class="home" v-loading="homeLoading">
        <CategoryList 
            :categoryList="categoryList" 
            :getArticleByPage="getArticleByPage"
            :nowSelectCategory="nowSelectCategory" 
            :setNowSelectCategory="setNowSelectCategory"
        />
        <div class="articleList">
            <template v-for="item in articleListData" :key="item.id">
                <ArticleListItem :itemData="item" />
            </template>
        </div>
        <el-pagination 
            :current-page="paginationData.pagenum"
            :page-size="paginationData.pagesize" 
            :pager-count="11" 
            layout="prev, pager, next"
            :total="paginationData.total"
            @current-change="(currentPage: number) => { getArticleByPage(currentPage) }" />
    </div>
</template>

<style lang="less" scoped>
.home {
    padding: 10px;
    flex: 1;
}
</style>

<style lang="less">
.el-pager li,
.el-pagination button {
    background: transparent !important;
}
</style>