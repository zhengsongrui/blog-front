<script setup lang="ts">
import { type CategoryListInter } from "@/types/categoryApi.types"
defineProps<{
    categoryList:CategoryListInter
}>()
</script>

<template>
<div class="categoryList"> 
    <div class="listItem" v-for="item in categoryList" :key="item.id">{{item.name}}</div>
</div>
</template>

<style lang="less" scoped>
.categoryList{
    display: flex;
    margin-bottom: 10px;
    .listItem{
        font-size: 22px;
        margin-right:20px;
        cursor: pointer;
        &:hover{
            color: #666;
        }
    }
}
</style>