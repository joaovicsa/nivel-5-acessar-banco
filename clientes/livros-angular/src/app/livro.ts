export class Livro {
    constructor(
        public codigo: string = '',
        public titulo: string = '',
        public autores: string[] = [],
        public editora: number = 0,
        public resumo: string = ''
    ) { }
}
