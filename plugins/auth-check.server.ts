import {useUserStore} from "~/store/user";
import {User} from "~/type/auth";

export default defineNuxtPlugin(async () => {

    addRouteMiddleware('auth-check', async () => {
        const config = useRuntimeConfig()

        const userStore = useUserStore()
        const user = userStore.user

        if(!user.logged){
            await $fetch('/auth/remember', {
                baseURL: config.API_URL,
                method: 'POST',
                headers: useRequestHeaders(['cookie']),
                credentials: 'include',
                async onResponse({  response}) {
                    if(response.ok){
                        userStore.register(response._data)
                    }
                }
            })
                .then(data => {
                    userStore.register(data as User)
                })
                .catch(_ => {
                    return
                })
        }

    }, {global: true})

})
