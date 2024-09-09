import Head from 'next/head';
import Menu from '../componentes/Menu';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
        <meta name="description" content="Descrição da Loja Next" />
      </Head>
      
      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
};

export default Home;
