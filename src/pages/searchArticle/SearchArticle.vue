<script setup lang="ts">
import ArticleListItem from "@/components/ArticleListItem.vue";
import SearchView from "./comp/SearchView.vue";

</script>

<template>
    <SearchView/>
   <div class="articleList">
            <template v-for="item in 4" :key="item">
                <ArticleListItem />
            </template>
        </div>
</template>

<style lang="less" scoped>

</style>