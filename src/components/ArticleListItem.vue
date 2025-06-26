<script setup lang="ts">
import router from "@/router";
import { View } from "@element-plus/icons-vue"
import {
    type SingleArticleInter
} from "@/types/articleApi.types"

function gotoDetail(id:number) {
    router.push({
        path:`/articleDetail/${id}`
    })
}

defineProps<{
    itemData: SingleArticleInter
}>()

</script>

<template>
    <div class="listItem">
        <div class="topView">
            <div class="title" @click="gotoDetail(itemData.id)">{{ itemData.title }}</div>
            <el-tag size="small" effect="plain" type="success">{{ itemData.categoryName }}</el-tag>
        </div>
        <div class="centerView" @click="gotoDetail(itemData.id)">{{ itemData.description }}</div>
        <div class="bottomView">
            <div class="read">
                <el-icon :size="16" color="#666">
                    <View></View>
                </el-icon>
                <span>{{ itemData.readCount }}</span>
            </div>
            <div class="date">{{ itemData.createtime }}</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.listItem {
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-bottom: 20px;
    padding: 10px;

    .topView,
    .bottomView {
        display: flex;
        align-items: center;
    }

    .bottomView {
        justify-content: flex-end;

        .read {
            display: flex;
            align-items: center;
            margin-right: 20px;

            >span {
                margin-left: 3px;
            }
        }
    }

    .title {
        font-size: 24px;
        margin-right: 10px;
        cursor: pointer;
    }
    .centerView{
        cursor: pointer;

    }
}
</style>