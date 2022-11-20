import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UndefinedLimitsComponent } from './undefined-limits.component';

const routes: Routes = [
  {
    path: '',
    component: UndefinedLimitsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UndefinedLimitsRoutingModule {}
