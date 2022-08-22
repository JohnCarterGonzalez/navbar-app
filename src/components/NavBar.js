import React, { useContext } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Context from '../context/Context.js';

const NavBar = () => {
  const context = useContext(Context);
  return (
  <>
      <Navbar bg="success">
        <Container>
          <Navbar.Brand href="#">Hello, { context.name }</Navbar.Brand>
        </Container>
      </Navbar>
  </>
  );
}

export default NavBar;
