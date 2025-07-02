<script setup lang="ts" name="ArticleDetail">
import useArticleDetail from './hooks/useArticleDetail';
import { getCurrentInstance  } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
let { editModel } = storeToRefs(useUserStore())
let { articleDetailData , goback , goEdit, deleteArticle} = useArticleDetail()
const {proxy} = getCurrentInstance()!

</script>

<template>
    <!-- // 激活在详情页刷新时的代码高亮等功能 -->
    <div >
        <template v-show="false">
            <mavon-editor></mavon-editor>
        </template>
        <div class="actionView" v-if="editModel">
            <el-button type="primary" @click="goEdit()">编辑</el-button>
            <el-button type="danger" @click="deleteArticle()">删除</el-button>
            <el-button type="danger" @click="goback" plain>返回</el-button>
        </div>
        <div class="myArticle">
            <header>
                <h1>{{ articleDetailData?.title }}</h1>
            </header>
            <div  v-if="articleDetailData" v-html="proxy?.$toHtml(articleDetailData.content)"></div>
        </div>
    </div>
</template>

<style lang="less" >
@import url( '../../assets/css/magick.less');
.myArticle{
    .hljs{
        background: transparent;
    }
}

</style>

<style lang="less" scoped>
.actionView{
    margin-top: 30px;
}
</style>