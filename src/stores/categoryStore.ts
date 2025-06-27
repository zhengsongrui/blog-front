import { defineStore } from "pinia";
import { ref } from "vue";
import request from "@/utils/request";
import { type CategoryListInter , type CategoryItemInter } from "@/types/categoryApi.types";
import { ElMessage, ElMessageBox } from "element-plus";

export const useCategoryStore = defineStore("category", () => {
  const categoryList = ref<CategoryListInter>([]);
  // 获取分类列表
  const getCategoryList = async () => {
    try {
      const res = await request.get("/api/category/getCategoryList");
      if (res.data) {
        categoryList.value = res.data;
      }
    } catch (error) {
      console.error("请求失败:", error);
    }
  };
  // 新增分类
  const createCategory = async (name: string) => {
    if (!name) {
      ElMessage.warning("请输入分类名称！");
      return false;
    }
    try {
      const res = await request.post("/api/category/createCategory", {
        name,
      });
      if (res.message === "success") {
        getCategoryList();
      }
    } catch (error) {
      console.error("请求失败:", error);
    }
  };
  // 新增分类
  const updateCategory = async (params:CategoryItemInter) => {
    if (!params.name) {
      ElMessage.warning("请输入分类名称！");
      return false;
    }
    
    try {
      const res = await request.put("/api/category/updateCategory", params);
      if (res.message === "success") {
        getCategoryList();
      }
    } catch (error) {
      console.error("请求失败:", error);
    }
  };
  // 删除分类
  const deleteCategory =  (id:number) => {
    ElMessageBox.confirm(`确定要删除该分类吗？`, "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
    }).then(async() => {
      try {
        const res = await request.delete(`/api/category/deleteCategory/${id}`);
        if (res.message === "success") {
          getCategoryList();
        }
      } catch (error) {
        console.error("请求失败:", error);
      }
    });
  };
  return {
    categoryList,
    getCategoryList,
    createCategory,
    deleteCategory,
    updateCategory,
  };
});
