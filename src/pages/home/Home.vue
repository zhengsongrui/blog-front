<script setup lang="ts">
import CategoryList from "./components/CategoryList.vue";
import ArticleListItem from "@/components/ArticleListItem.vue";
import useHome from "./hooks/useHome";

let { articleListData, 
    getArticleByPage, 
    categoryList,
    getCategoryList, 
} = useHome()
getArticleByPage()
getCategoryList()
</script>

<template>
    <div class="home">
        <CategoryList :categoryList="categoryList"/>
        <div class="articleList">
            <template v-for="item in articleListData" :key="item.id">
                <ArticleListItem :itemData="item" />
            </template>
        </div>
    </div>
</template>

<style lang="less" scoped>
.home {
    padding: 10px;

}
</style>