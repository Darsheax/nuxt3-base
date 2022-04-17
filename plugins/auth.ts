import {useUserStore} from "~/store/user";
import {Auth} from "~/composables/useAuth";
import {Role} from "~/type/auth";

export default defineNuxtPlugin(async () => {

    addRouteMiddleware('auth', async (to, from) => {
        const userStore = useUserStore()
        const user = userStore.user

        const auth = to.meta.auth as Auth

        if(auth.type === 'guest' && user.logged) return navigateTo(from.path)
        if(auth.type === 'login' && !user.logged) return navigateTo(from.path)
        if(auth.allowed && !auth.allowed.includes(user.role)) return navigateTo(from.path)
    })

    return {
        provide: {
            user: useUserStore().user,
            role: Role,
        }
    }
})
