export enum Role {
    GUEST = -1,
    USER = 0,
    PRENIUM = 1,
    ADMIN = 2,
    EDITOR = 3,
}

export type User = {
    id: number,
    email: string,
    name: string,
    role: Role
}
