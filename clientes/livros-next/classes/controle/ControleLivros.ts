import { Livro } from '../modelo/Livro';

const dadosLivros = [
{ codigo: 1, codEditora: 1, titulo: "Livro A", resumo: "Resumo do Livro A", autores: ["Autor A", "Autor B"] },
{ codigo: 2, codEditora: 2, titulo: "Livro B", resumo: "Resumo do Livro B", autores: ["Autor C"] },
{ codigo: 3, codEditora: 3, titulo: "Livro C", resumo: "Resumo do Livro C", autores: ["Autor D", "Autor E"] }
];

class ControleLivros {
livros: Livro[];

constructor() {
this.livros = dadosLivros.map(data => new Livro(data.codigo, data.codEditora, data.titulo, data.resumo, data.autores));
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

export default ControleLivros;