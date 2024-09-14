import { useState, useEffect, useMemo } from 'react';
import { ControleLivros } from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

const LivroLista = () => {
    const controleLivro = useMemo(() => new ControleLivros(), []);
    const controleEditora = useMemo(() => new ControleEditora(), []);
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        if (!carregado) {
            controleLivro.obterLivros().then(livrosObtidos => {
                setLivros(livrosObtidos);
                setCarregado(true);
            });
        }
    }, [carregado, controleLivro]);

    const excluir = (codigoLivro) => {
        controleLivro.excluir(codigoLivro).then(() => {
            setCarregado(false);
        });
    };

    const LinhaLivro = ({ livro }) => {
        const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
        return (
            <tr>
                <td className="titulo-cell">
                    {livro.titulo}
                    <div>
                        <button className="excluir-button" onClick={() => excluir(livro.codigo)}>
                            Excluir
                        </button>
                    </div>
                </td>
                <td className="resumo-cell">
                    {livro.resumo}
                </td>
                <td className="editora-cell">
                    {nomeEditora}
                </td>
                <td className="autores-cell">
                    <ul>
                        {livro.autores.map((autor, index) => (
                            <li key={index}>{autor}</li>
                        ))}
                    </ul>
                </td>
            </tr>
        );
    };

    return (
        <main>
            <h1>Catálogo de Livros</h1>
            <table className="book-table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro, index) => (
                        <LinhaLivro key={index} livro={livro} />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;
