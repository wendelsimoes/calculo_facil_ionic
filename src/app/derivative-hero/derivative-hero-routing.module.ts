import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DerivativeHeroComponent } from './derivative-hero.component';

const routes: Routes = [
  {
    path: '',
    component: DerivativeHeroComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DerivativeHeroRoutingModule { }
