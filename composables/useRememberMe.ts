import {useUserStore} from "~/store/user";

export const useRememberMe = () => {
    return useState('remember', async () => {
        const config = useRuntimeConfig()

        const userStore = useUserStore()
        const user = userStore.user

        if(!user.logged && !user.checked){
            await $fetch('/auth/remember', {
                baseURL: config.API_URL,
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
