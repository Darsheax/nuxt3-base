import {Role} from "~/type/auth";

const permissions = {
    [Role.USER] : {
        'post:create': {limit: 50},
    },
    [Role.PRENIUM] : {
        'post:create': {limit: 100},
        'post:edit': {}
    },
}

export default permissions
