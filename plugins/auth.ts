import {useUserStore} from "~/store/user";
import Role from "~/type/Auth/Role";
import {useRememberMe} from "~/composables/useRememberMe";

export default defineNuxtPlugin(async () => {

    addRouteMiddleware('auth', async (to) => {
        const userStore = useUserStore()
        const user = userStore.user

        const guest = to.meta.guest ?? false
        const allowed = to.meta.allowed

        if([Role.ADMIN].includes(user.role)) return

        // @ts-ignore
        if( (!user.logged && !guest) || (allowed && !allowed.includes(user.role))) {
            console.log("Vous n'etes pas autorisé !")
            return abortNavigation()
        }
    })


    return {
        provide: {
            user: useUserStore().user,
            role: Role,
        }
    }
})
