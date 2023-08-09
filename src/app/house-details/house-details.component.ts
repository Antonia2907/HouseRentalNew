import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { House } from '../models/house.model';
import { HouseService } from '../services/house.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {
house: House | undefined;

constructor(private route: ActivatedRoute, private houseService: HouseService) {}

ngOnInit(): void {
  const houseId = Number(this.route.snapshot.paramMap.get('id'));
  // Simuleaza cautarea caseio cu ID-il dat dintr-un serviciu
  this.house = this.houseService.getHouseById(houseId);
}
}
