import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'theory',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'practice',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'scores',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'undefined-limits',
        loadChildren: () => import('../undefined-limits/undefined-limits-routing.module').then(m => m.UndefinedLimitsRoutingModule)
      },
      {
        path: 'place-derivatives',
        loadChildren: () => import('../place-derivatives/place-derivatives-routing.module').then(m => m.PlaceDerivativesRoutingModule)
      },
      {
        path: 'derivative-hero',
        loadChildren: () => import('../derivative-hero/derivative-hero-routing.module').then(m => m.DerivativeHeroRoutingModule)
      },
      {
        path: '',
        redirectTo: '/tabs/theory',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/theory',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
