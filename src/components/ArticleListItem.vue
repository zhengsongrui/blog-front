<script setup lang="ts">
import router from "@/router";
import { View } from "@element-plus/icons-vue"

function gotoDetail(){
    router.push({
        path:'/articleDetail'
    })
}

</script>

<template>
    <div class="listItem">
        <div class="topView">
            <div class="title" @click="gotoDetail">测试标题</div>
            <el-tag size="small" effect="plain" type="success">测试类别</el-tag>
        </div>
        <div class="centerView" @click="gotoDetail">描述</div>
        <div class="bottomView">
            <div class="read">
                <el-icon :size="16" color="#666">
                    <View></View>
                </el-icon>
                <span>35</span>
            </div>
            <div class="time">2020/09/08</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.listItem {
    border: 1px solid red;
    margin-bottom: 20px;

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
    }

}
</style>