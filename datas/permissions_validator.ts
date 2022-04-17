import {Role} from "~/type/auth";

const permissions_validator = {
    'post:create': (user, data) => {
        if (data.limit <= user.permission.edit) {
            return {limit: data.limit}
        }
    },
    'post:edit': (user, data, arg) => {
        console.log(arg)
        if (arg.user !== user.id) {
            return {author: `Seul l'auteur ${arg.user} est autorisé a [EDIT]`}
        }
    }
}

export default permissions_validator
