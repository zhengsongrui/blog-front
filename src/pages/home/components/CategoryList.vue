<script setup lang="ts">
import { type CategoryListInter, type CategoryItemInter } from "@/types/categoryApi.types"
defineProps<{
    categoryList: CategoryListInter,
    nowSelectCategory: CategoryItemInter,
    setNowSelectCategory: Function
}>()

const defalutParams = {
    id: 0,
    name: "",
    level: 1,
}

</script>

<template>
    <div class="categoryList">
        <div class="listItem" :class="nowSelectCategory.id === 0 ? 'active' : ''"
            @click="setNowSelectCategory(defalutParams)">
            全部
        </div>
        <div class="listItem" :class="nowSelectCategory.id === item.id ? 'active' : ''" v-for="item in categoryList"
            :key="item.id" @click=" setNowSelectCategory(item)">
            {{ item.name }}
        </div>
    </div>
</template>

<style lang="less" scoped>
.categoryList {
    display: flex;
        flex-wrap: wrap;

    .listItem {
        font-size: 22px;
        margin-right: 20px;
    margin-bottom: 10px;
        cursor: pointer;
        flex: none;
        &:hover {
            color: #666;
        }

        &.active {
            border-bottom: 3px solid #67c23a;
        }
    }
}
</style>