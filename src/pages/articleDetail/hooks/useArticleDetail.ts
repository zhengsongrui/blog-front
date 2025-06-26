import { useRoute } from 'vue-router';
import { ref } from "vue";
import request from '@/utils/request'
import { type  SingleArticleInter } from "@/types/articleApi.types"

export default function () {
    const route  = useRoute()
    // 获取分类列表
    const articleDetailData = ref<SingleArticleInter|{content:string}>({content:''})
    const getArticleById = async () => {
        console.log(route.params.id)
        // let id:number = 
        try {
            const res = await request.get('/api/articles/getArticleById',{id:route.params.id})
            if (res.data) {
                articleDetailData.value = res.data
                console.log(articleDetailData.value.content)
            }
        } catch (error) {
            console.error('请求失败:', error)
        }
    }


    return {
      getArticleById,
      articleDetailData
    }
}
