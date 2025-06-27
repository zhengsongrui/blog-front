import { useRoute } from 'vue-router';
import { ref } from "vue";
import request from '@/utils/request'
import { type  SingleArticleInter } from "@/types/articleApi.types"

export default function () {
    const route  = useRoute()
    // 根据id获取文章信息
    const articleDetailData = ref<SingleArticleInter|null>(null)
    const getArticleById = async () => {
        try {
            const res = await request.get('/api/articles/getArticleById',{id:route.params.id})
            if (res.data) {
                articleDetailData.value = res.data
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
