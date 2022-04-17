import {useUserStore} from "~/store/user";
import permissions from "~/datas/permissions";
import permissions_validator from "~/datas/permissions_validator";

export default defineNuxtPlugin((nuxtApp) => {

    nuxtApp.vueApp.directive('can', {


        mounted(el, binding){

            const userStore = useUserStore()
            const user = userStore.user

            const role = user.role.toString()

            const arg = binding.arg
            const permission = Object.keys(binding.modifiers)[0]

            // @ts-ignore
            const has = (permissions[user.role] && Object.keys(permissions[user.role]).includes(permission)) === true

            // @ts-ignore
            const data = has ? permissions[user.role][permission] : {}
            console.log(data)

            // @ts-ignore
            const errors = permissions_validator[permission] && permissions_validator[permission](user, data, arg)

            binding.value.has = has
            binding.value.errors = errors
        },

        getSSRProps(binding){


            const userStore = useUserStore()
            const user = userStore.user

            const role = user.role.toString()

            const arg = binding.arg
            const permission = Object.keys(binding.modifiers)[0]

            // @ts-ignore
            const has = (permissions[user.role] && Object.keys(permissions[user.role]).includes(permission)) === true

            // @ts-ignore
            const data = has ? permissions[user.role][permission] : {}
            console.log(data)

            // @ts-ignore
            const errors = permissions_validator[permission] && permissions_validator[permission](user, data, arg)

            binding.value.has = has
            binding.value.errors = errors

            return {}
        }

    })

})
