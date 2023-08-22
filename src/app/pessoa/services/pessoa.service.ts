import { Injectable } from '@angular/core';
import { Pessoa } from '../../shared/models/pessoa.model';
const LS_CHAVE: string = "pessoas";
@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listarTodos(): Pessoa[] {
    const pessoas = localStorage[LS_CHAVE]; //recupera as pessoas do localstorage
    //precisa de condicionar para verificar se existe pessoas
    return pessoas ? JSON.parse(pessoas) : []; //se existir, converte para json e retorna, se não existir retorna um array vazio
  }

  inserir(pessoa: Pessoa): void {
    const pessoas = this.listarTodos(); //recupera todas as pessoas
    pessoa.id = new Date().getTime(); //gera um id aleatório
    pessoas.push(pessoa); //adiciona no array
    localStorage[LS_CHAVE] = JSON.stringify(pessoas); //converte para string e salva no localstorage
  }

  buscarPorId(id: number): Pessoa | undefined {
    const pessoas: Pessoa[] = this.listarTodos(); //recupera todas as pessoas 
    return pessoas.find(pessoa => pessoa.id === id); //retorna a pessoa que tem o id igual ao que foi passado 
    // function verificar(pessoa) {
    // return pessoa.id === id;
    // }
    // pessoas.find( verificar )
  }

  atualizar(pessoa: Pessoa): void {
    const pessoas: Pessoa[] = this.listarTodos(); //recupera todas as pessoas

    pessoas.forEach((obj, index, objs) => {
      if (pessoa.id === obj.id) {
        objs[index] = pessoa;
      }
    }); //percorre o array de pessoas))

    localStorage[LS_CHAVE] = JSON.stringify(pessoas); //armaena o array de pessoas no localstorage
  }

  // function alterarPessoa(obj, index, objs) {
  // if (pessoa.id === obj.id) {
  // objs[index] = pessoa;
  // }
  // }
  // pessoas.forEach( alterarPessoa );

  remover(id: number): void {
    let pessoas: Pessoa[] = this.listarTodos(); //recupera todas as pessoas
    pessoas = pessoas.filter(pessoa => pessoa.id !== id); //filtra as pessoas que tem o id diferente do que foi passado
    localStorage[LS_CHAVE] = JSON.stringify(pessoas); //armazena o array de pessoas no localstorage
  }

}
