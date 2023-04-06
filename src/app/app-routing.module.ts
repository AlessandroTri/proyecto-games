import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsCardsComponent } from './pages/planets-cards/planets-cards.component';
import { HitComponent } from './pages/hit/hit.component';
import { WhoIsWhoComponent } from './pages/who-is-who/who-is-who.component';
import { TresuareFinderComponent } from './pages/tresuare-finder/tresuare-finder.component';
import { MoneyChangeComponent } from './pages/money-change/money-change.component';

const routes: Routes = [{
    path: "planets-card", component: PlanetsCardsComponent 
  },{
    path: "hit", component: HitComponent
  },{
    path: "money-change", component: MoneyChangeComponent
  },{
    path: "treasure", component: TresuareFinderComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
