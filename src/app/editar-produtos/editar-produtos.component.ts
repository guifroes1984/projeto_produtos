import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {

  // Atributo mensagem
  mensagem: string = '';

  // Usa web (HttpClient), e a rota ativa (ActivatedRoute)
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { }

  // Funcão é executada quando a página é aberta
  ngOnInit(): void {

    // Captura o id enviado pela URL
    const idProduto = this.activatedRoute.snapshot.paramMap.get('id') as string;

    // Consulta o produto na API através do id
    this.httpClient.get(environment.apiUrl + "/produtos/" + idProduto)
    .subscribe(
      (data: any) => {
        // Preenchedo os campos do formulário com os dados do produto
        this.formEdicao.patchValue(data);
      },
      (e) => {
        console.log(e);
      }
    )

  }

  // Montando a estrutura do formulario
  formEdicao = new FormGroup({
    
    // Campos do formulário...serão os mesmo campos que temos na consulta..iremos acrescentar o id
    idProduto: new FormControl(''),
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required]),
    quantidade: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
  });

  // Método para pegar os dados do formulário
  get form(): any {
    return this.formEdicao.controls;
  }

  // Função para fazer a camada de edição na API
  onSubmit(): void {
    this.httpClient.put(environment.apiUrl + '/produtos', this.formEdicao.value,
    {responseType: 'text'})
    .subscribe(
      data => {
        this.mensagem = data;
      },
      e => {
        this.mensagem = "Ocorreu um erro, a edição não foi realizada.";
        console.log(e);
      }
    )
  }

}
