import React from 'react';
import ControleEditora from '../classes/controle/ControleEditora';

export const controleEditora = new ControleEditora();

import { Livro } from '../classes/modelo/Livro';

export interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}


export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;


  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{livro.autores}</td>
      <td>{nomeEditora}</td>
      <td>
        <button onClick={excluir} className="btn btn-danger">
          Excluir
        </button>
      </td>
    </tr>
  );
};

export default LinhaLivro;
