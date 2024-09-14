import { Livro } from '../modelo/Livro';


const baseURL = "http://localhost:3030/livros";


interface LivroMongo {
    _id: string | null;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
}

class ControleLivros {
    constructor() { }

    async obterLivros(): Promise<Livro[]> {
        const response = await fetch(baseURL, { method: 'GET' });
        const livrosMongo: LivroMongo[] = await response.json();

        return livrosMongo.map(livroMongo => new Livro(
            livroMongo._id || '',
            livroMongo.codEditora,
            livroMongo.titulo,
            livroMongo.resumo,
            livroMongo.autores
        ));
    }


    async incluir(novoLivro: Livro): Promise<boolean> {
        const livroMongo: LivroMongo = {
            _id: null,
            codEditora: novoLivro.codEditora,
            titulo: novoLivro.titulo,
            resumo: novoLivro.resumo,
            autores: novoLivro.autores
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
        const response = await fetch(`${baseURL}/${codigoLivro}`, {
            method: 'DELETE'
        });

        return response.ok;
    }
}

export { ControleLivros };
