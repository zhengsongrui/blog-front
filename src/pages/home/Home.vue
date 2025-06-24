<script setup lang="ts">
import CategoryList from "./comp/CategoryList.vue";
import ArticleListItem from "@/components/ArticleListItem.vue";

</script>

<template>
    <div class="home">
        <CategoryList />
        <div class="articleList">
            <template v-for="item in 4" :key="item">
                <ArticleListItem />
            </template>
        </div>
    </div>
</template>

<style lang="less" scoped>
.home {
    padding: 10px;
    background-color: #999;

}
</style>