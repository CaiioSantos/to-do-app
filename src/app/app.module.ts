import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AboutComponent } from './admin/about/about/about.component';
import { LayoutComponent } from './admin/layout/layout/layout.component';
import { OcupacaoListComponent } from './admin/ocupacao/ocupacao-list/ocupacao-list.component';
import { OcupacaoMostrarComponent } from './admin/ocupacao/ocupacao-mostrar/ocupacao-mostrar.component';
import { OcupacaoUpdateComponent } from './admin/ocupacao/ocupacao-update/ocupacao-update.component';
import { OcupacaoCadastroComponent } from './admin/ocupacao/ocupacao-cadastro/ocupacao-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LayoutComponent,
    OcupacaoListComponent,
    OcupacaoCadastroComponent,
    OcupacaoMostrarComponent,
    OcupacaoUpdateComponent,
    OcupacaoCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
