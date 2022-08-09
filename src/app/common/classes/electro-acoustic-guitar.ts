import { PickupsType } from "../enums/pickups-type.enum";
import { AcousticGuitarType } from "../enums/acoustic-guitar-type.enum";
import { IAcousticGuitar } from "../interfaces/acoustic-guitar.interface";
import { IElectroGuitar } from "../interfaces/electro-guitar.interface";
import { AcousticGuitar } from "./acoustic-guitar";

export class ElectroAcousticGuitar implements IElectroGuitar, IAcousticGuitar{
    acousticGuitarType: AcousticGuitarType;
    pickupsType: PickupsType[];
    pickupsCount: number;
    mark: string;
    price: number;
    year: number;
    stringCount: number;
    shape: string;
    id: string;
    constructor(obj: IAcousticGuitar & IElectroGuitar) {
        this.acousticGuitarType = obj.acousticGuitarType;
        this.pickupsType = obj.pickupsType;
        this.pickupsCount = obj.pickupsCount;
        this.mark = obj.mark;
        this.price = obj.price;
        this.year = obj.year;
        this.stringCount = obj.stringCount;
        this.shape = obj.shape;
        this.id = this.generateId();
        
    }
  

    generateId(): string {
        return 'EA' + Date.now();
    }

}