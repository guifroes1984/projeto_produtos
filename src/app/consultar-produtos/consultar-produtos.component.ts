import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

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
    this.httpCliente.get(environment.apiUrl + '/produtos').subscribe(
      (data)=> {
        this.produtos = data as any[];
      },
      (e) => {
        console.log(e);
       }
      
     )
  }

  // Função para fazer a exclusão do produto na API
  excluir(idProduto: number): void {
    if(window.confirm('Deseja realmente excluir o produto selecionado?')) {
      this.httpCliente.delete(environment.apiUrl + "/produtos/" + idProduto,
      {responseType: 'text'})
      .subscribe(
        (data) => {
          alert(data); // Exibir mensagem em uma janela poup
          this.ngOnInit(); // Recarregar a consulta de produtos
        },
        (e) => {
          console.log(e);
        }
      )
    }
  }

}
