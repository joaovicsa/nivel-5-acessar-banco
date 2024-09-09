import { Editora } from '../modelo/Editora';

const dadosEditoras = [
  { codEditora: 1, nome: "Editora A" },
  { codEditora: 2, nome: "Editora B" },
  { codEditora: 3, nome: "Editora C" }
];

class ControleEditora {
  editoras: Editora[];

  constructor() {
    this.editoras = dadosEditoras.map(data => new Editora(data.codEditora, data.nome));
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = this.editoras.find(editora => editora.codEditora === codEditora);
    return editoraEncontrada ? editoraEncontrada.nome : undefined;
  }
}

export default ControleEditora;