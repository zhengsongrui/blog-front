<script setup lang="ts">
import useArticleDetail from './hooks/useArticleDetail';
let { articleDetailData, getArticleById } = useArticleDetail()
console.log(articleDetailData.value.content)
getArticleById()
</script>

<template>
    <div class="myArticle" v-html="articleDetailData.content"></div>
</template>

<style lang="less" scoped></style>