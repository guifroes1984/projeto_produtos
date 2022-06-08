import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {


  // Atributo
  mensagem: string = '';
  
  // Variavel que consegue ver o tipo que vai pela a URL "httpCliente"
  constructor( private httpCliente: HttpClient) { }

  ngOnInit(): void {
  }
  // Montado a estrutura do formulário
  formCadastro = new FormGroup({

    // Campos do formulário
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required]),
    quantidade: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
  })

  // Acessando o formulário/campos da página HTML
  get form(): any {
    return this.formCadastro.controls;
  }

  // Função para fazer a chamada do formulário
  onSubmit(): void {
    this.httpCliente.post(
      environment.apiUrl + '/produtos',
      this.formCadastro.value, { responseType: 'text'}).subscribe(
        data => {
          this.mensagem = data;
          this.formCadastro.reset();
        },
        e => {

          // Se der problema entra, sempre recebe a informação mesmo se gravar ou não.
          this.mensagem = "Ocooreu um erro, o cadastro não foi realizado";
          console.log(e);
        }
      )
  }
}
