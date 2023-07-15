import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { ContactComponent } from './contact/contact/contact.component';
import { EsperienceComponent } from './esperience/esperience/esperience.component';
import { MarquesComponent } from './marques/marques/marques.component';
import { ProduitsComponent } from './produits/produits/produits.component';
import { PrestationsComponent } from './prestations/prestations/prestations.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { PreventionComponent } from './produits/produits/prevention/prevention.component';
import { ComplementsComponent } from './produits/produits/complements/complements.component';
import { VenteComponent } from './produits/produits/vente/vente.component';
import { SpagyrieComponent } from './produits/produits/spagyrie/spagyrie.component';
import { MaquillageComponent } from './produits/produits/maquillage/maquillage.component';
import { PhytotherapieComponent } from './produits/produits/phytotherapie/phytotherapie.component';
import { HomeopathieComponent } from './produits/produits/homeopathie/homeopathie.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    EsperienceComponent,
    MarquesComponent,
    ProduitsComponent,
    PrestationsComponent,
    AccueilComponent,
    PreventionComponent,
    ComplementsComponent,
    VenteComponent,
    SpagyrieComponent,
    MaquillageComponent,
    PhytotherapieComponent,
    HomeopathieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
