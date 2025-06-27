<script setup lang="ts">
import useArticleDetail from './hooks/useArticleDetail';
let { articleDetailData, getArticleById } = useArticleDetail()
getArticleById()
</script>

<template>
    <div class="myArticle">
        <div  v-if="articleDetailData" v-html="articleDetailData.content">

        </div>
    </div>
</template>

<style lang="less" >
@import url( '../../assets/css/magick.less');


</style>

<style  scoped>

</style>