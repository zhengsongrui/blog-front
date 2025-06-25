<script setup lang="ts">

</script>

<template>
    <div class="breadcrumbView">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
    </div>

</template>

<style lang="less" scoped>
.breadcrumbView {
    padding-top: 20px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    // border-bottom: 1px solid #bbb;
}
</style>