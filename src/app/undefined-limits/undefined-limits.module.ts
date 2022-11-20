import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UndefinedLimitsComponent } from './undefined-limits.component';

import { UndefinedLimitsRoutingModule } from './undefined-limits-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UndefinedLimitsRoutingModule
  ],
  declarations: [UndefinedLimitsComponent]
})
export class UndefinedLimitsModule {}
