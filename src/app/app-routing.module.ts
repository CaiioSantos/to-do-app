import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout/layout.component';
import { OcupacaoUpdateComponent } from './admin/ocupacao/ocupacao-update/ocupacao-update.component';
import { OcupacaoCreateComponent } from './admin/ocupacao/ocupacao-create/ocupacao-create.component';
import { OcupacaoListComponent } from './admin/ocupacao/ocupacao-list/ocupacao-list.component';
import { AboutComponent } from './admin/about/about/about.component';

const routes: Routes = [
  {path: '', component: LayoutComponent },
    {path: 'ocupacao/cadastro', component: OcupacaoCreateComponent},
    {path: 'ocupacao/lista', component: OcupacaoListComponent},
    {path: 'ocupacao/editar', component: OcupacaoUpdateComponent},
    {path: 'sobre', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
