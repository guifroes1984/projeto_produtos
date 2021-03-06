import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { ConsultarProdutosComponent } from './consultar-produtos/consultar-produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarProdutosComponent } from './editar-produtos/editar-produtos.component';

// Criar os módulos
const routes: Routes = [
  
  { path: 'cadastrar-produtos', component: CadastrarProdutosComponent },
  { path: 'consultar-produtos', component: ConsultarProdutosComponent },
  { path: 'editar-produtos/:id', component: EditarProdutosComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CadastrarProdutosComponent,
    ConsultarProdutosComponent,
    EditarProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
