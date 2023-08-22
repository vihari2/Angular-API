import { Component } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { OnInit } from '@angular/core';
import { Pessoa } from '../../shared/models/pessoa.model';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {
  pessoas: Pessoa[] = [];
  constructor(private pessoaService: PessoaService) { }
  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }
  listarTodos(): Pessoa[] {
    // return this.pessoaService.listarTodos();
    return [
      new Pessoa(1, 'Fulano de Tal', 20),
      new Pessoa(2, 'Gabriela', 30),
      new Pessoa(3, 'João', 40),
      new Pessoa(4, 'Maria', 50),
      new Pessoa(5, 'José', 60),
      new Pessoa(6, 'Julio', 20),
    ];
  }
}
