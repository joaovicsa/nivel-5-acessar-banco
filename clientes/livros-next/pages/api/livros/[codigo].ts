import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from ".";

// Define a função que tratará as requisições HTTP
export default (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    switch (method) {
        case 'DELETE':
            const codigo = req.query.codigo;

            if (!codigo) {
                res.status(400).json({ message: 'Código de livro inválido.' });
                return;
            }

            try {
                controleLivro.excluir(Number(codigo));
                res.status(200).json({ message: 'Livro excluído com sucesso.' });
            } catch (error) {
                const message = (error as { message: string }).message || 'Unknown error';
                res.status(500).json({ message: 'Erro ao excluir livro.', error: message });
            }
            break;

        default:
            res.setHeader('Allow', ['DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
};
