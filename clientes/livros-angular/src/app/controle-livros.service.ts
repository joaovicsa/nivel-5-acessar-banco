import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Livro[];

  constructor() {
    this.livros = [
      { codigo: 1, titulo: 'Livro A', autores: ['Autor A'], editora: 1, ano: 2020 },  // Usando códigos numéricos para editora
      { codigo: 2, titulo: 'Livro B', autores: ['Autor B'], editora: 2, ano: 2021 },  // Corrigido 'autor' para 'autores'
      { codigo: 3, titulo: 'Livro C', autores: ['Autor C'], editora: 3, ano: 2022 }
    ].map(data => new Livro(data.codigo, data.titulo, data.autores, data.editora, data.ano));
  }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(novoLivro: Livro): void {
    const novoCodigo = this.livros.reduce((max, livro) => (livro.codigo > max ? livro.codigo : max), 0) + 1;
    novoLivro.codigo = novoCodigo;
    this.livros.push(novoLivro);
  }

  excluir(codigoLivro: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigoLivro);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
