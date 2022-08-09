import { PickupsType } from "../enums/pickups-type.enum";
import { IElectroGuitar } from "../interfaces/electro-guitar.interface";

export class ElectroGuitar implements IElectroGuitar{
    pickupsType: PickupsType[];
    pickupsCount: number;
    mark: string;
    price: number;
    year: number;
    stringCount: number;
    shape: string;
    id: string;
    constructor(obj: IElectroGuitar) {
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
        return 'E' + Date.now();
    }

}