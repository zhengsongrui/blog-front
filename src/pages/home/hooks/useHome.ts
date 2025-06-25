import request from '@/utils/request'
import { ref } from "vue";

export default function () {
    const articleListData = ref([])
    // 获取文章列表数据
    const getArticleByPage = async () => {
        try {
            const res = await request.get('/api/articles/getArticleByPage')
            console.log(res.data) // 响应数据
            if (res.data) {
                articleListData.value = res.data
            }
        } catch (error) {
            console.log(error) // 响应数据
            console.error('请求失败:', error)
        }
    }

    // 获取分类列表
    const categoryList = ref([])
    
    const getCategoryList = async () =>{
        try {
            const res = await request.get('/api/category/getCategoryList')
            console.log(res.data) // 响应数据
            if (res.data) {
                categoryList.value = res.data
            }
        } catch (error) {
            console.log(error) // 响应数据
            console.error('请求失败:', error)
        }
    }

    return {
        articleListData,
        getArticleByPage,
        categoryList,
        getCategoryList,
    }
}
