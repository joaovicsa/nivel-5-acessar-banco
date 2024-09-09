import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Menu from '../componentes/Menu';
import { controleEditora } from './api/editoras';


interface Livro {
  codigo: number;
  titulo: string;
  resumo: string;
  autores: string[];
  codEditora: number;
}

const baseURL = "http://localhost:3000/api/livros";

const incluirLivro = async (livro: Livro) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(livro)
  });
  return response.ok;
};

const LivroDados = () => {
  const router = useRouter();
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(0);

  
  const opcoes = controleEditora.getEditoras().map(editora => ({ value: editora.codEditora, text: editora.nome }));

  const tratarCombo = (e: ChangeEvent<HTMLSelectElement>) => {
  setCodEditora(Number(e.target.value));
};

const incluir = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const livro: Livro = { codigo: 0, titulo, resumo, autores: autores.split('\n'), codEditora };
  const sucesso = await incluirLivro(livro);
  if (sucesso) router.push('/LivroLista');
};
    return (
    <div className={styles.containerDados}>
      <Head>
        <title>Loja Next</title>
        <meta name="description" content="Descrição da Loja Next" />
      </Head>
      
      <Menu />
      
      <main className={styles.mainDados}>
        <h1>Inclusão de Livro</h1>
        <form onSubmit={incluir} className={styles.form}>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título"
            className={styles.input}
          />
          <textarea
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            placeholder="Resumo"
            className={styles.textarea}
          />
          <textarea
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            placeholder="Autores"
            className={styles.textarea}
          />
          <select value={codEditora} onChange={tratarCombo} className={styles.select}>
            {opcoes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          <button type="submit" className={styles.button}>
            Incluir
          </button>
        </form>
      </main>
    </div>
  );
};


export default LivroDados;
