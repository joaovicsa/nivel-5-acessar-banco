export class Livro {
    constructor(
        public codigo: number = 0,
        public titulo: string = '',
        public autores: string[] = [],
        public editora: number = 0,
        public ano: number = 0,
        public resumo: string = ''
    ) { }
}
