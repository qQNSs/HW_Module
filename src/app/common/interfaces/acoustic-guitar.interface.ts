import { AcousticGuitarType } from "../enums/acoustic-guitar-type.enum";
import { IGuitar } from "./guitar.interface";

export interface IAcousticGuitar extends IGuitar{
    acousticGuitarType: AcousticGuitarType;
}