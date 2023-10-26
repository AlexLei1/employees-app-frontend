export interface IUser {
	id: string;
    email: string;
    password: string;
    name: string;
}

// тип данных уходящий серверу
export type ReqUserData = Omit<IUser, "id">;

// тип данных приходящий с сервера
export type ResLoginData = IUser & { token: string };