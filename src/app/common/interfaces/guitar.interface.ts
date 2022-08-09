import { IUniqueId } from "./unique-id.interface";

export interface IGuitar extends IUniqueId{
    mark: string;
    price: number;
    year: number;
    stringCount: number;
    shape: string;
}