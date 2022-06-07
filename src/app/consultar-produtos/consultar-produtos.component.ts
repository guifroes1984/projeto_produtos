import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-produtos',
  templateUrl: './consultar-produtos.component.html',
  styleUrls: ['./consultar-produtos.component.css']
})
export class ConsultarProdutosComponent implements OnInit {

  // Lista para armazenar os dados dos produtos
  produtos: any[] = [];

  // Injeção de dependência. 
  constructor( private httpCliente : HttpClient) { }

  // Método executado quando o componente é aberto
  ngOnInit(): void {
    this.httpCliente.get('http://localhost:8080/api/produtos').subscribe(
      (data)=> {
        this.produtos = data as any[];
      },
      (e) => {
        console.log(e);
       }
      
     )
  }
}
