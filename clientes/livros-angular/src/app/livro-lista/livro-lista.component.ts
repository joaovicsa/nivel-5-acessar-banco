import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';
import { Editora } from '../editora';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public editoras: Editora[] = [];
  public livros: Livro[] = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();

    this.servLivros.obterLivros().then((livros: Livro[]) => {
      this.livros = livros;
    });
  }

  excluir(codigo: string): void {
    this.servLivros.excluir(codigo).then(() => {
      return this.servLivros.obterLivros();
    }).then((livros: Livro[]) => {
      this.livros = livros;
    });
  }

  obterNome(codEditora: number): string | undefined {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
