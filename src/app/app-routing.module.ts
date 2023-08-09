import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { HouseListComponent } from './house-list/house-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/houses', pathMatch: 'full' },
  {path: 'houses', component: HouseListComponent },
  { path: 'house/:id', component: HouseDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
