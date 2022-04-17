export enum Role {
    USER = 0,
    PRENIUM = 1,
    ADMIN = 2,
    EDITOR = 3,
}

export interface Auth {
    allowed?: [Role] | null,
    type: 'guest' | 'login' | null
}

export const useAuth = ({allowed = null, type = 'login'} : Auth) => {
    return {allowed, type}
}
