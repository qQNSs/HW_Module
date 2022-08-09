import { Component, OnInit } from '@angular/core';
import { AcousticGuitar } from 'src/app/common/classes/acoustic-guitar';
import { ElectroAcousticGuitar } from 'src/app/common/classes/electro-acoustic-guitar';
import { ElectroGuitar } from 'src/app/common/classes/electro-guitar';
import { AcousticGuitarType } from 'src/app/common/enums/acoustic-guitar-type.enum';
import { PickupsType } from 'src/app/common/enums/pickups-type.enum';

@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html',
  styleUrls: ['./guitars.component.scss']
})
export class GuitarsComponent implements OnInit {
  acousticGuitar: AcousticGuitar;
  electroGuitar: ElectroGuitar;
  electroAcousticGuitar: ElectroAcousticGuitar;
  acousticGuitarType = AcousticGuitarType;
  pickupsType = PickupsType;
  constructor() {
    this.electroGuitar = new ElectroGuitar({
      id: '1',
      year: 2007,
      mark: 'Fender',
      shape: 'Stratocaster',
      stringCount: 6,
      price: 2000,
      pickupsCount: 2,
      pickupsType: [PickupsType.Humbucker, PickupsType.Humbucker]
    });
    this.electroAcousticGuitar = new ElectroAcousticGuitar({
      id: '1',
      year: 2007,
      acousticGuitarType: AcousticGuitarType.Acoustic,
      pickupsCount: 1,
      pickupsType: [PickupsType.Magnetic],
      mark: 'Fender',
      shape: 'Stratocaster',
      stringCount: 6,
      price: 2000
    });
    this.acousticGuitar = new AcousticGuitar({
      id: '1',
      year: 2007,
      acousticGuitarType: AcousticGuitarType.Acoustic,
      mark: 'Fender',
      shape: 'Stratocaster',
      stringCount: 6,
      price: 2000
    })
   }

  ngOnInit(): void {
  }

}
