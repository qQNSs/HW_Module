import { IUniqueId } from "./unique-id.interface";

export interface IUser extends IUniqueId{
    name: string;
    email: string;
    password: string;
}