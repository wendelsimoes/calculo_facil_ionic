import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UndefinedLimitsComponent } from './undefined-limits.component';

import { UndefinedLimitsRoutingModule } from './undefined-limits-routing.module';

import { MathjaxModule } from 'mathjax-angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UndefinedLimitsRoutingModule,
    MathjaxModule.forRoot(/*Optional Config*/)
  ],
  declarations: [UndefinedLimitsComponent]
})
export class UndefinedLimitsModule {}
