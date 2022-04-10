import {useUserStore} from "~/store/user";
import Role from "~/type/Auth/Role";
import {useRememberMe} from "~/composables/useRememberMe";

export default defineNuxtPlugin(() => {

    addRouteMiddleware('auth', (to) => {
        const userStore = useUserStore()
        const user = userStore.user

        // @ts-ignore
        if(!user.logged || !to.meta.allowed.includes(user.role)) {
            console.log("Vous n'etes pas autorisé !")
            return abortNavigation()
        }
    })

    addRouteMiddleware('auth-check', async () => {

        const base_api = useApi()
        const userStore = useUserStore()
        const user = userStore.user

        if(!user.logged && !user.checked){
            await $fetch(base_api.value + '/auth/remember', {
                method: 'GET',
                credentials: 'include',
                async onResponse({  response }) {
                    if(response.ok){
                        userStore.register(response._data)
                    }
                }
            })
            .then(data => {
                user.checked = true
            })
            .catch(data => {
                return
            })
        }

    }, {global: true})

    return {
        provide: {
            user: useUserStore().user,
            role: Role,
        }
    }
})
