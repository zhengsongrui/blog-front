import type { CategoryItemInter } from "@/types/categoryApi.types";
import { ref, nextTick } from "vue";
import type { InputInstance } from "element-plus";


export default function () {
  let showInput = ref(false);
  let inputValue = ref("");
  const nowSelectCategory = ref({
    id: 0,
    level: 1,
    name: "",
    sort: 0,
    username: "",
  });
  function clickTag(item: CategoryItemInter) {
    nowSelectCategory.value = JSON.parse(JSON.stringify(item));
  }

  const InputRef = ref<InputInstance>();
// 打开输入框，聚焦
const showInputfunc = () => {
  showInput.value = true;
  nextTick(() => {
    InputRef.value!.input!.focus();
  });
};
  return {
    showInput,
    inputValue,
    nowSelectCategory,
    clickTag,
    InputRef,
    showInputfunc,
  };
}
