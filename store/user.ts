import {ref} from "vue"
import {defineStore} from "pinia";
import User from "~/type/Auth/User";
import Role from "~/type/Auth/Role";

export const useUserStore = defineStore("user", () => {

    const user = ref({
        email: "",
        name: "",
        role: -1,
        logged: false,
        checked: false,
    })

    const register = ({email, name, role} : User) => {
        user.value.email = email
        user.value.name = name
        user.value.role = role
        user.value.logged = true
    }

    return {
        user,
        register
    }

})
