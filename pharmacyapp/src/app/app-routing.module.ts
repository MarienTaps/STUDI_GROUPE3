import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { ContactComponent } from './contact/contact/contact.component';
import { EsperienceComponent} from './esperience/esperience/esperience.component'
import { ProduitsComponent } from './produits/produits/produits.component';
import { PrestationsComponent } from './prestations/prestations/prestations.component';
import { MarquesComponent } from './marques/marques/marques.component';

const routes: Routes = [
  {path: '', redirectTo:'/Accueil', pathMatch:'full'},
  {path: 'Accueil', title: 'Accueil', component: AccueilComponent },
  {path: 'contact', title: 'Contact', component: ContactComponent },
  {path: 'esperience', title: 'Experience', component: EsperienceComponent },
  {path: 'produits', title: 'Produits', component: ProduitsComponent },
  {path: 'prestations', title: 'Prestations', component: PrestationsComponent },
  {path: 'marques', title: 'Marques', component: MarquesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
