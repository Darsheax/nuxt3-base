import {useUserStore} from "~/store/user";

export const useRememberMe = () => {
    return useState('remember', async () => {
        const base_api = useApi()
        const userStore = useUserStore()
        const user = userStore.user

        if(!user.logged && !user.checked){
            await $fetch(base_api.value + '/auth/remember', {
                method: 'POST',
                credentials: 'include',
                async onResponse({ request, response, options }) {
                    if(response.ok){
                        userStore.register(response._data)
                    }
                }
            })
        }

        user.checked = true
    })
}