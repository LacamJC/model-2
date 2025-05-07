import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import styles from '../assets/scss/header/Header.module.css';
import icone from '../assets/img/lrlogo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="#home" className={styles.logo}>
          <img src={icone} alt="LR Assessoria" className={styles.logoImage} />
          {/* LR ASSESSORIA */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" onClick={handleMenuToggle} />
        <Navbar.Collapse id="navbarNav" className={`${isMenuOpen ? 'show' : ''}`}>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Início</Nav.Link>
            <Nav.Link href="#events">Eventos</Nav.Link>
            <Nav.Link href="#services">Serviços</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <Button variant="link" className={styles.servicesButton}>Serviços</Button> */}
      </Container>
    </Navbar>
  );
};

export default Header;
