<script setup lang="ts" name="ArticleDetail">
import useArticleDetail from './hooks/useArticleDetail';
import { getCurrentInstance  } from 'vue';


                        
let { articleDetailData, getArticleById } = useArticleDetail()
const {proxy} = getCurrentInstance()!
getArticleById()

</script>

<template>
    <div class="myArticle">
        <header>
            <h1>{{ articleDetailData?.title }}</h1>
        </header>
        <div  v-if="articleDetailData" v-html="proxy?.$toHtml(articleDetailData.content)"></div>
    </div>
    <!-- // 激活在详情页刷新时的代码高亮等功能 -->
    <template v-show="false">
        <mavon-editor></mavon-editor>
    </template>
</template>

<style lang="less" >
@import url( '../../assets/css/magick.less');
.myArticle{
    .hljs{
        background: transparent;
    }
}

</style>

