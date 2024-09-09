import React from 'react';
import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Menu: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/" passHref>
            <Nav.Link as="span">Home</Nav.Link>
          </Link>
          <Link href="/LivroLista" passHref>
            <Nav.Link as="span">Catálogo</Nav.Link>
          </Link>
          <Link href="/LivroDados" passHref>
            <Nav.Link as="span">Dados do Livro</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
