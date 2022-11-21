import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlaceDerivativesComponent } from './place-derivatives.component';

import { PlaceDerivativesRoutingModule } from './place-derivatives-routing.module';

import { MathjaxModule } from 'mathjax-angular';
import DerivativeChallengeService from 'src/services/derivate-challenge-service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PlaceDerivativesRoutingModule,
    MathjaxModule.forRoot(/*Optional Config*/)
  ],
  declarations: [PlaceDerivativesComponent],
  providers: [DerivativeChallengeService]
})
export class PlaceDerivativesModule { }
