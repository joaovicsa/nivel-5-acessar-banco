import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivros } from './controle/ControleLivros';
import  ControleEditora  from './controle/ControleEditora';

const LivroDados = () => {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(1);

  const controleLivros = new ControleLivros();
  const controleEditora = new ControleEditora();

  const opcoes = controleEditora.getEditoras().map(editora => ({ value: editora.codEditora, text: editora.nome }));

  const navigate = useNavigate();

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const salvarDados = (event) => {
    event.preventDefault();
    const novoLivro = {
      codigo: '',
      titulo: titulo,
      resumo: resumo,
      autores: autores.split('\n'),
      codEditora: codEditora
    };
    controleLivros.incluir(novoLivro).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="container mt-4">
      <h2>Dados do Livro</h2>
      <form onSubmit={salvarDados}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Titulo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">Resumo</label>
          <textarea
            className="form-control"
            id="resumo"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            rows="3"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="editora" className="form-label">Editora</label>
          <select
            value={codEditora}
            onChange={tratarCombo}
            className='form-select'
          >
            {opcoes.map(opcao => <option key={opcao.value} value={opcao.value}>{opcao.text}</option>)}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="autores" className="form-label">Autores (1 por linha)</label>
          <textarea
            className="form-control"
            id="autores"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            rows="3"
          />
        </div>
        <button type="submit" className="btn btn-primary">Salvar Dados</button>
      </form>
    </div>
  );
}

export default LivroDados;
