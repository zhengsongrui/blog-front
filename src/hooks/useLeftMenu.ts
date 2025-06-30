
// 侧边栏hooks
import { computed, ref } from "vue"
export default function () {
    const initAsideWidth:number = 320
    // 侧边栏宽度控制
    let asideWidth = ref(0)
    function changeAsideWidth() {
        if (asideWidth.value > 0) {
            asideWidth.value = 0
        } else {
            asideWidth.value = initAsideWidth
        }
    }
    // 控制侧边栏按钮中的文本
    let asideBtnText = computed(() => {
        return asideWidth!.value === 0 ? '>' : '<'
    })
    return {
        changeAsideWidth,
        asideBtnText,
        asideWidth,
        initAsideWidth
    }
}