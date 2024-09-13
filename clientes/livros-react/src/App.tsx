
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import './App.css'; 

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-custom bg-dark">
        <div className="container">
          <Link to="/" className="nav-link-custom mx-2">Catálogo</Link>
          <Link to="/dados" className="nav-link-custom mx-2">Novo</Link>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route index element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;