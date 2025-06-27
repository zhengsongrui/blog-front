import request from '@/utils/request'
import { ref } from "vue";
import { type SingleArticleInter } from '@/types/articleApi.types';
import { type PaginationDataInter } from '@/types/index.types';
import { type CategoryItemInter } from "@/types/categoryApi.types"
import moment from 'moment';

export default function () {

    // 获取文章列表数据
    const articleListData = ref([])
    const getArticleByPage = async (currentPage: number = 1) => {
        setHomeLoading(true)
        try {
            let params = {
                pagenum: currentPage,
                pagesize: paginationData.value.pagesize
            }
            const res = await request.get('/api/articles/getArticleByPage', Object.assign(params, nowSelectCategory.value || {}, { level: undefined }))
            if (res.data) {
                setHomeLoading(false)
                if (res.data.rows) {
                    articleListData.value = res.data.rows.map((item: SingleArticleInter) => {
                        return Object.assign(item, { createtime: moment(item.createtime).format("YYYY/MM/DD") })
                    })
                }
                if (res.data.pageData) {
                    paginationData.value = res.data.pageData
                }
            }
        } catch (error) {
            setHomeLoading(false)
            console.error('请求失败:', error)
        }
    }

    // 分页组件数据
    const paginationData = ref<PaginationDataInter>({
        total: 0,
        pagenum: 1,
        pagesize: 10,
    })

    // 当前选中分类
    const nowSelectCategory = ref<CategoryItemInter|null>(null)
    const setNowSelectCategory = function (data: CategoryItemInter) {
        nowSelectCategory.value = data
        getArticleByPage()
    }

   

    // 主页加载
    const homeLoading = ref(false)
    const setHomeLoading = function (status: boolean) {
        homeLoading.value = status
    }


    return {
        articleListData,
        getArticleByPage,
        homeLoading,
        setHomeLoading,
        paginationData,
        nowSelectCategory,
        setNowSelectCategory
    }
}
