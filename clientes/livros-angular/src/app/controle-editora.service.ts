import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Editora[];

  constructor() {
    this.editoras = [
      { codEditora: 1, nome: 'Editora A' },
      { codEditora: 2, nome: 'Editora B' },
      { codEditora: 3, nome: 'Editora C' }
    ].map(data => new Editora(data.codEditora, data.nome));
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = this.editoras.find(editora => editora.codEditora === codEditora);
    return editoraEncontrada ? editoraEncontrada.nome : undefined;
  }
}
