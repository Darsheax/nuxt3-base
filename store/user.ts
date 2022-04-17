import {ref} from "vue"
import {defineStore} from "pinia";
import {Role, User} from "~/type/auth";

export const useUserStore = defineStore("user", () => {

    const user = ref({
        id: -1,
        email: "",
        name: "",
        role: Role.GUEST,
        logged: false,
        permission: {
            edit: 120
        }
    })

    const register = ({id, email, name, role} : User) => {
        user.value.id = id
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
