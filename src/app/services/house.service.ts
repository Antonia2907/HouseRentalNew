import { Injectable } from '@angular/core';
import { House } from '../models/house.model';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private houses: House[] = [
    {
      id: 1,
      title: 'Casa frumoasă',
      description: 'O casă spațioasă cu grădină mare.',
      price: 1500,
      imageUrl: 'url_casa_1.jpg'
    },
    // Adaugă mai multe case aici
  ];

  getHouses(): House[] {
    return this.houses;
  }

  getHouseById(id: number): House | undefined {
    return this.houses.find(house => house.id === id);
  }
}