<script setup lang="ts" name="ArticleListItem">
import { useRouter } from "vue-router";
import { View, Edit } from "@element-plus/icons-vue";
import { type SingleArticleInter } from "@/types/articleApi.types";

const router = useRouter();
function gotoPage(id: number, path: string) {
  router.push({
    path: `/${path}/${id}`,
  });
}

defineProps<{
  itemData: SingleArticleInter;
  editModel: boolean;
}>();
</script>

<template>
  <div class="listItem">
    <div class="topView">
      <div
        class="title textCss"
        @click="gotoPage(itemData.id, 'articleDetail')"
      >
        {{ itemData.title }}
      </div>
      <el-tag size="small" effect="plain" type="success">{{
        itemData.categoryName
      }}</el-tag>
      <el-icon
        class="editIcon"
        @click="gotoPage(itemData.id, 'editArticle')"
        v-if="editModel"
        :size="20"
        color="#409eff"
      >
        <Edit></Edit>
      </el-icon>
    </div>
    <div
      class="centerView textCss"
      @click="gotoPage(itemData.id, 'articleDetail')"
    >
      {{ itemData.description }}
    </div>
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

  .topView {
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 30px;

    .editIcon {
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
      transition: all 0.25s linear;

      &:hover {
        color: rgb(121.3, 187.1, 255);
      }
    }
  }

  .bottomView {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .read {
      display: flex;
      align-items: center;
      margin-right: 20px;

      > span {
        margin-left: 3px;
      }
    }
  }

  .title {
    font-size: 24px;
    line-height:24px;
    margin-right: 10px;
    cursor: pointer;
  }

  .centerView {
    padding: 12px 0;
    cursor: pointer;
  }

  .textCss {
    word-break: break-all;
    white-space: wrap;
  }
}
</style>
