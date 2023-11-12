import React from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from 'react-router-dom';


function NavBoot() {



    return (
      <div>

        <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                      <Navbar.Brand as={Link} to={'/'}>Paw Fund Me</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/'}>Inicio</Nav.Link>
                        <Nav.Link href="#link">Quienes somos</Nav.Link>
                        <Nav.Link as={Link} to={'/item'}>Colaborar</Nav.Link>
                        <Nav.Link href="#link">Contactanos</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                </Container>
              </Navbar>

      </div>
    );
  }

  
export default NavBoot;