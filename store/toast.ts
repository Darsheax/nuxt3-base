import {ref} from "vue"
import {defineStore} from "pinia";

type Toast = {
    id: number,
    type: 'success' | 'error',
    message: string,
    time: number
}

export const useToast = defineStore("toast", () => {

    const toastManager : Array<Toast> = reactive([])
    const id = ref(0)

    const add = (toast : Toast) => {
        toast.id = id.value
        toastManager.push(toast)
        id.value++
    }

    const remove = (id: number) => {
        toastManager.splice(0, toastManager.length, ...toastManager.filter(toast => toast.id != id))
    }

    return {
        toastManager,
        add,
        remove
    }

})
