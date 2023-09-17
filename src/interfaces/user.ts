export type BaseUserType = {
    username: string;
    password: string;
}

export type RegistrationType = {
    fullname: string;
} & BaseUserType