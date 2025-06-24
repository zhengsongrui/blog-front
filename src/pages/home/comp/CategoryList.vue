<script setup lang="ts">
import router from '@/router';

function gotoSearchArticle(){
    router.push({
        path:'/searchArticle'
    })
}

</script>

<template>
<div class="categoryList"> 
    <div class="listItem" @click="gotoSearchArticle">前端</div>
    <div class="listItem">后端</div>
    <div class="listItem">服务器</div>
</div>
</template>

<style lang="less" scoped>
.categoryList{
    display: flex;
    margin-bottom: 10px;
    .listItem{
        margin:0 20px;
    }
}
</style>