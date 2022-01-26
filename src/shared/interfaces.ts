export interface ILoginRequest {
    email: string;
    password: string;
}

export interface IChangePasswordRequest {
    oldPassword: string;
    newPassword: string;
}

export interface ICreateUserRequest {
    username: string;
    email: string;
    password: string;
}

export interface IResetPasswordRequest {
    email: string;
}
