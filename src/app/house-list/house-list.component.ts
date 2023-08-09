import { Component } from '@angular/core';
import { House } from '../models/house.model';
import { HouseService } from '../services/house.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent {
houses: House[] = [
  {
    id: 1,
  title: 'Casa frumoasa',
  description: 'O casa spatioasa cu gradina mare.',
  price: 1500,
  imageUrl: 'url_casa_1.jpg'
  },
];
constructor(private houseService: HouseService) {
  this.houses = houseService.getHouses();
}
// Adauga mai multe case aici
}
