import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TresuareFinderComponent } from './pages/tresuare-finder/tresuare-finder.component';
import { WhoIsWhoComponent } from './pages/who-is-who/who-is-who.component';
import { PlanetsCardsComponent } from './pages/planets-cards/planets-cards.component';
import { HitComponent } from './pages/hit/hit.component';
import { ComponentsComponent } from './shared/components/components.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { CardTreasureComponent } from './pages/tresuare-finder/card-treasure/card-treasure.component';
import { MoneyChangeComponent } from './pages/money-change/money-change.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TresuareFinderComponent,
    WhoIsWhoComponent,
    PlanetsCardsComponent,
    HitComponent,
    ComponentsComponent,
    HeaderComponent,
    CardTreasureComponent,
    MoneyChangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
