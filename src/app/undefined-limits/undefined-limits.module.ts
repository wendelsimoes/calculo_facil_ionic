import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UndefinedLimitsComponent } from './undefined-limits.component';

import { UndefinedLimitsRoutingModule } from './undefined-limits-routing.module';

import { MathjaxModule } from 'mathjax-angular';
import UndefinedLimitChallengeService from 'src/services/undefined-limit-challenge-service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UndefinedLimitsRoutingModule,
    MathjaxModule.forRoot(/*Optional Config*/)
  ],
  declarations: [UndefinedLimitsComponent],
  providers: [UndefinedLimitChallengeService]
})
export class UndefinedLimitsModule { }
