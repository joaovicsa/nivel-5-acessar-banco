import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Menu from '../componentes/Menu';
import { ControleLivros } from '../classes/controle/ControleLivros';
import { Livro } from '../classes/modelo/Livro';

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);
  const controleLivros = new ControleLivros();

  useEffect(() => {
    if (!carregado) {
      controleLivros.obterLivros()
        .then((data) => {
          setLivros(data);
          setCarregado(true);
        });
    }
  }, [carregado]);

  const excluir = (codigo: string) => {  // Código agora é uma string
    controleLivros.excluir(codigo).then((sucesso) => {
      if (sucesso) {
        setLivros(livros.filter((livro) => livro.codigo !== codigo));
        setCarregado(false);
      }
    });
  };

  return (
    <div className={styles.containerLista}>
      <Head>
        <title>Loja Next</title>
        <meta name="description" content="Descrição da Loja Next" />
      </Head>

      <Menu />

      <main className={styles.mainLista}>
        <h1>Lista de Livros</h1>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              <th className={styles.tableCell}>Título</th>
              <th className={styles.tableCell}>Resumo</th>
              <th className={styles.tableCell}>Editora</th>
              <th className={styles.tableCell}>Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro, index) => (
              <LinhaLivro key={index} livro={livro} excluir={() => excluir(livro.codigo)} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

const LinhaLivro: React.FC<{ livro: Livro; excluir: () => void }> = ({ livro, excluir }) => (
  <tr>
    <td className={styles.tableCell}>{livro.titulo}
      <div>
        <button onClick={excluir} className={styles.deleteButton}>Excluir</button>
      </div>
    </td>
    <td className={styles.tableCell}>{livro.resumo}</td>
    <td className={styles.tableCell}>{livro.codEditora}</td>
    <td className={styles.tableCell}>{livro.autores}</td>
  </tr>
);

export default LivroLista;
