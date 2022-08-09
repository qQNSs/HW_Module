import { PickupsType } from "../enums/pickups-type.enum";
import { IGuitar } from "./guitar.interface";

export interface IElectroGuitar extends IGuitar{
    pickupsType: PickupsType[];
    pickupsCount: number;
}