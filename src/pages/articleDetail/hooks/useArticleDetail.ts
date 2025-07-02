import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";
import request from "@/utils/request";
import { type SingleArticleInter } from "@/types/articleApi.types";
import { ElMessage, ElMessageBox } from "element-plus";

export default function () {
  const route = useRoute();
  const router = useRouter();
  const goback = function () {
    router.back();
  };
  const goEdit = function () {
    router.push({
      path: `/editArticle/${articleDetailData.value!.id}`,
    });
  };
  // 根据id获取文章信息
  const articleDetailData = ref<SingleArticleInter | null>(null);
  const getArticleById = async () => {
    try {
      const res = await request.get("/api/articles/getArticleById", {
        id: route.params.id,
      });
      if (res.data) {
        articleDetailData.value = res.data;
      }
    } catch (error) {
      console.error("请求失败:", error);
    }
  };
  getArticleById();
  // 删除文章
  async function deleteArticle() {
    console.log("deleteArticle");
    ElMessageBox.confirm(`确定要删除该文章吗？`, "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
    }).then(async () => {
      try {
        const res = await request.delete(
          `/api/articles/deleteArticle/${articleDetailData.value!.id}`
        );
        if (res.message === "success") {
          goback();
          ElMessage.success("删除成功！");
        }
      } catch (error) {
        console.error("请求失败:", error);
      }
    });
  }

  watch([() => route.params], () => {
    getArticleById();
  });

  return {
    goEdit,
    goback,
    deleteArticle,
    getArticleById,
    articleDetailData,
  };
}
