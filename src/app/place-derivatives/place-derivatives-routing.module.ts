import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceDerivativesComponent } from './place-derivatives.component';

const routes: Routes = [
  {
    path: '',
    component: PlaceDerivativesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceDerivativesRoutingModule { }
