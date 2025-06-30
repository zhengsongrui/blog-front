import { type EditArticleInter } from "../types/editArticle.types";
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter, useRoute } from "vue-router";
import request from "@/utils/request";

export default function () {
  const router = useRouter();
  const paramsId = Number(useRoute().params.id);
  // 文章数据
  const articleData = ref<EditArticleInter>({
    id: paramsId || 0,
    title: "",
    description: "",
    content: "",
  });
  if (paramsId > 0) {
    getArticleById();
  }
  function goback() {
    router.back();
  }
  // 校验函数
  function validateArticleData(data: EditArticleInter): boolean {
    if (!data.title) {
      ElMessage.warning("请输入文章名称！");
      return false;
    }
    if (!data.categoryId) {
      ElMessage.warning("请输入文章类别！");
      return false;
    }
    if (!data.description) {
      ElMessage.warning("请输入文章描述！");
      return false;
    }
    if (!data.content) {
      ElMessage.warning("请输入文章内容！");
      return false;
    }
    return true;
  }
  // 根据id获取文章信息
  async function getArticleById() {
    try {
      const res = await request.get("/api/articles/getArticleById", {
        id: useRoute().params.id,
      });
      if (res.data) {
        articleData.value = res.data;
      }
    } catch (error) {
      console.error("请求失败:", error);
    }
  }

  // 新增文章
  async function addArticle() {
    if (validateArticleData(articleData.value)) {
      try {
        const res = await request.post(
          "/api/articles/addArticle",
          articleData.value
        );
        if (res.message === "success") {
            ElMessage.success('新增文章成功！')
          goback();
        }
      } catch (error) {
        console.error("请求失败:", error);
      }
    }
  }
  // 删除文章
  async function deleteArticle() {
    ElMessageBox.confirm(`确定要删除该文章吗？`, "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
    }).then(async () => {
      if (validateArticleData(articleData.value)) {
        try {
          const res = await request.delete(
            `/api/articles/deleteArticle/${paramsId}`
          );
          if (res.message === "success") {
            goback();
            ElMessage.success('删除成功！')
          }
        } catch (error) {
          console.error("请求失败:", error);
        }
      }
    });
  }

  // 修改文章
  async function updateArticle() {
    if (validateArticleData(articleData.value)) {
      try {
        const res = await request.put(
          "/api/articles/updateArticle",
          articleData.value
        );
        if (res.message === "success") {
            ElMessage.success('修改成功！')
          goback();
        }
      } catch (error) {
        console.error("请求失败:", error);
      }
    }
  }

  return {
    articleData,
    validateArticleData,
    getArticleById,
    addArticle,
    updateArticle,
    deleteArticle,
    goback,
  };
}
