import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { ContactComponent } from './contact/contact/contact.component';
import { ProduitsComponent } from './produits/produits/produits.component';
import { PrestationsComponent } from './prestations/prestations/prestations.component';
import { MarquesComponent } from './marques/marques/marques.component';
import { PreventionComponent } from './produits/produits/prevention/prevention.component';
import { ComplementsComponent } from './produits/produits/complements/complements.component';
import { SpagyrieComponent } from './produits/produits/spagyrie/spagyrie.component';
import { VenteComponent } from './produits/produits/vente/vente.component';
import { MaquillageComponent } from './produits/produits/maquillage/maquillage.component';
import { HomeopathieComponent } from './produits/produits/homeopathie/homeopathie.component';
import { PhytotherapieComponent } from './produits/produits/phytotherapie/phytotherapie.component';

const routes: Routes = [
  {path: 'accueil', title: 'Accueil', component: AccueilComponent },
  {path: 'contact', title: 'Contact', component: ContactComponent },
  {path: 'produits', title: 'Produits', component: ProduitsComponent },
  {path: 'prestations', title: 'Prestations', component: PrestationsComponent },
  {path: 'marques', title: 'Marques', component: MarquesComponent },
  {path: 'prevention', title: 'Prevention', component: PreventionComponent},
  {path: 'complement', title: 'Complement', component :ComplementsComponent },
  {path: 'spagyrie', title: 'Spagyrie', component :SpagyrieComponent },
  {path: 'vente', title: 'Vente libre', component :VenteComponent },
  {path: 'maquillage', title: 'Maquillages', component :MaquillageComponent },
  {path: 'homeopathie', title: 'Homeopathie', component :HomeopathieComponent },
  {path: 'phytotherapie', title: 'Phytotherapie', component :PhytotherapieComponent }
  

  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
