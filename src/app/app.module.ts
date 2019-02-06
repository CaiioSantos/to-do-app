import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './admin/about/about/about.component';
import { LayoutComponent } from './admin/layout/layout/layout.component';
import { OcupacaoListComponent } from './admin/ocupacao/ocupacao-list/ocupacao-list.component';
import { OcupacaoCreateComponent } from './admin/ocupacao/ocupacao-create/ocupacao-create.component';
import { OcupacaoMostrarComponent } from './admin/ocupacao/ocupacao-mostrar/ocupacao-mostrar.component';
import { OcupacaoUpdateComponent } from './admin/ocupacao/ocupacao-update/ocupacao-update.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LayoutComponent,
    OcupacaoListComponent,
    OcupacaoCreateComponent,
    OcupacaoMostrarComponent,
    OcupacaoUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
