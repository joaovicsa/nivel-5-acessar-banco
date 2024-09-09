// pages/api/livros/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivros from '../../../classes/controle/ControleLivros';

// Criação de uma instância de ControleLivro
export const controleLivro = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      // Obtenção da lista de livros
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      // Inclusão de um novo livro
      const novoLivro = req.body;
      controleLivro.incluir(novoLivro);
      res.status(200).json({ message: 'Livro incluído com sucesso' });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
