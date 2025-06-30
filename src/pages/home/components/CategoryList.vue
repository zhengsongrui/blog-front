<script setup lang="ts" name="CategoryList">
import { useCategoryStore } from "@/stores/categoryStore";
import { type CategoryItemInter } from "@/types/categoryApi.types"
import { storeToRefs } from "pinia";
import {useRouter} from 'vue-router'

const router = useRouter()
let { categoryList  } = storeToRefs(useCategoryStore())

defineProps<{
    nowSelectCategory: CategoryItemInter | null,
    setNowSelectCategory: Function,
    editModel:boolean
}>()

</script>

<template>
    <div class="categoryList">
        <div class="listItem" :class="!nowSelectCategory ? 'active' : ''" @click="setNowSelectCategory(null)">
            全部
        </div>
        <div class="listItem" :class="nowSelectCategory && nowSelectCategory.id === item.id ? 'active' : ''"
            v-for="item in categoryList" :key="item.id" @click=" setNowSelectCategory(item)">
            {{ item.name }}
        </div>
        <el-button type="primary" v-if="editModel" @click="router.push('/editCategory')">
            编辑分类
        </el-button>
    </div>
</template>

<style lang="less" scoped>
.categoryList {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px 0 20px 0;

    .listItem {
        font-size: 22px;
        padding: 4px;
        margin: 10px;
        cursor: pointer;
        flex: none;

        &:hover {
            color: #666;
        }

        &.active {
            border-bottom: 3px solid #67c23a;
        }
    }
    .el-button{
        margin-left: 20px;
    }
}
</style>