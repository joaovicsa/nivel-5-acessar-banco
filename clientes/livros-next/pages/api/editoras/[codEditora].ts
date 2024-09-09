// pages/api/editoras/[codEditora].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { codEditora } = req.query;
      const codigo = parseInt(codEditora as string, 10);
      const nomeEditora = controleEditora.getNomeEditora(codigo);

      if (nomeEditora) {
        res.status(200).json({ nome: nomeEditora });
      } else {
        res.status(404).json({ error: 'Editora não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
