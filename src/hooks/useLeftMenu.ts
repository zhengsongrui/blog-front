// 侧边栏hooks
import { computed, ref,  watch } from "vue";
import request from "@/utils/request";
import { type SingleArticleInter } from "@/types/articleApi.types";
import { ElMessage } from "element-plus";
import { useRoute , useRouter } from "vue-router";

export default function () {
  const initAsideWidth: number = 320;
  // let timeoutIndex = ref(0)
  let dataTotalNum = ref(0);
  let activeMenu = ref("1");
  let searchValue = ref("");
  // 侧边栏宽度控制
  let asideWidth = ref(0);
  function changeAsideWidth() {
    if (asideWidth.value > 0) {
      asideWidth.value = 0;
    } else {
      asideWidth.value = initAsideWidth;
    }
  }
  // 控制侧边栏按钮中的文本
  let asideBtnText = computed(() => {
    return asideWidth!.value === 0 ? ">" : "<";
  });

  // 获取文章列表数据
  const searchListData = ref<SingleArticleInter[]>([]);
  const getArticleByPage = async () => {
    // setHomeLoading(true)
    if (!searchValue.value) {
      ElMessage.warning("请输入文章名称。");
      return false;
    }
    try {
      let params = {
        pagenum: 1,
        pagesize: 10,
      };
      const res = await request.get(
        "/api/articles/getArticleByPage",
        Object.assign(
          params,
          {
            title: searchValue.value,
          },
          { level: undefined }
        )
      );
      if (res.data) {
        // setHomeLoading(false)
        if (res.data.rows) {
          searchListData.value = res.data.rows;
          dataTotalNum.value = res.data.pageData.total
        }
      }
    } catch (error) {
      // setHomeLoading(false)
      console.error("请求失败:", error);
    }
  };
 
  // 浏览记录
  const browsingHistory = ref<SingleArticleInter[]>([])
  const getBrowsingHistory = async () => {
    // setHomeLoading(true)
    try {
      const res = await request.get("/api/articles/getArticleBrowsingHistory");
      if (res.data) {
        // setHomeLoading(false)
        browsingHistory.value = res.data
      }
    } catch (error) {
      // setHomeLoading(false)
      console.error("请求失败:", error);
    }
  };

  const route = useRoute()
  getBrowsingHistory()
  watch([()=>route.fullPath],(val)=>{
    if(val[0].includes('articleDetail/')){
      getBrowsingHistory()
    }
  },{immediate:true})

  const router = useRouter()
  function goAndRefresh (id: number) {
     router.push({
      path: `/articleDetail/${id}`,
    });
  };

  

  return {
    getArticleByPage,
    changeAsideWidth,
    goAndRefresh,
    browsingHistory,
    asideBtnText,
    asideWidth,
    initAsideWidth,
    activeMenu,
    searchValue,
    searchListData,
    dataTotalNum,
  };
}
