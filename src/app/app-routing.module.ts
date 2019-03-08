import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OcupacaoUpdateComponent } from './admin/ocupacao/ocupacao-update/ocupacao-update.component';
import { OcupacaoListComponent } from './admin/ocupacao/ocupacao-list/ocupacao-list.component';
import { AboutComponent } from './admin/about/about/about.component';
import { OcupacaoCadastroComponent } from './admin/ocupacao/ocupacao-cadastro/ocupacao-cadastro.component';
import { OcupacaoMostrarComponent } from './admin/ocupacao/ocupacao-mostrar/ocupacao-mostrar.component';

const routes: Routes = [
    {path: 'ocupacao/cadastro', component: OcupacaoCadastroComponent},
    {path: 'ocupacao/lista', component: OcupacaoListComponent},
    {path: 'ocupacao/editar/:id', component: OcupacaoUpdateComponent},
    {path: 'ocupacao/mostrar/:id', component: OcupacaoMostrarComponent},
    {path: 'sobre', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
