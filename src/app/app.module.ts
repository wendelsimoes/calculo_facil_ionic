import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UndefinedLimitsModule } from './undefined-limits/undefined-limits.module';
import { PlaceDerivativesModule } from './place-derivatives/place-derivatives.module';
import { DerivativeHeroModule } from './derivative-hero/derivative-hero.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, UndefinedLimitsModule, PlaceDerivativesModule, DerivativeHeroModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
