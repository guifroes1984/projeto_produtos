import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { ConsultarProdutosComponent } from './consultar-produtos/consultar-produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

// Criar os módulos
const routes: Routes = [
  
  { path: 'cadastrar-produtos', component: CadastrarProdutosComponent },
  { path: 'consultar-produtos', component: ConsultarProdutosComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    CadastrarProdutosComponent,
    ConsultarProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
