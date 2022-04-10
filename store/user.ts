import {ref} from "vue"
import {defineStore} from "pinia";
import User from "~/type/Auth/User";
import Role from "~/type/Auth/Role";

export const useUserStore = defineStore("user", () => {

    const user = ref({
        email: "",
        name: "",
        role: Role.USER,
        logged: false,
        checked: false,
        n: 0
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
