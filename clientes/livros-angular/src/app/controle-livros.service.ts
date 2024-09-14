import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseURL = "http://localhost:3030/livros";

export interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  constructor() { }

 
  async obterLivros(): Promise<Livro[]> {
    const response = await fetch(baseURL, { method: 'GET' });
    const livrosMongo: LivroMongo[] = await response.json();

    return livrosMongo.map(livroMongo => ({
      codigo: livroMongo._id || '',  
      titulo: livroMongo.titulo,
      autores: livroMongo.autores,
      editora: livroMongo.codEditora,
      resumo: livroMongo.resumo
    }));
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      _id: null,  
      codEditora: livro.editora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };

    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(livroMongo)
    });

    return response.ok;
  }

  async excluir(codigoLivro: string): Promise<boolean> {
    const response = await fetch(`${baseURL}/${codigoLivro}`, { method: 'DELETE' });
    return response.ok;
  }
}
