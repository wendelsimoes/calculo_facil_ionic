import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DerivativeHeroComponent } from './derivative-hero.component';

import { DerivativeHeroRoutingModule } from './derivative-hero-routing.module';

import { MathjaxModule } from 'mathjax-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import DerivativePairService from 'src/services/derivative-pair-service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DerivativeHeroRoutingModule,
    MathjaxModule.forRoot(/*Optional Config*/),
    DragDropModule
  ],
  declarations: [DerivativeHeroComponent],
  providers: [DerivativePairService]
})
export class DerivativeHeroModule { }
