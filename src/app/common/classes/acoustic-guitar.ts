import { AcousticGuitarType } from "../enums/acoustic-guitar-type.enum";
import { IAcousticGuitar } from "../interfaces/acoustic-guitar.interface";

export class AcousticGuitar implements IAcousticGuitar{
    acousticGuitarType: AcousticGuitarType;
    mark: string;
    price: number;
    year: number;
    stringCount: number;
    shape: string;
    id: string;
    constructor(obj:IAcousticGuitar) {
        this.acousticGuitarType = obj.acousticGuitarType;
        this.mark = obj.mark;
        this.price = obj.price;
        this.year = obj.year;
        this.stringCount = obj.stringCount;
        this.shape = obj.shape;
        this.id = this.generateId();
    }
    generateId(): string {
        return 'A' + Date.now();
    }

}