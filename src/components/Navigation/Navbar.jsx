import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarouselPage from '../Homepage/CarouselPage';
import Peace from '../Pages/Peace';
import Random from '../Pages/Random';
import '../../index.css'
import './nav.css'

function Navigation() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className='navbar sticky-top navigation' variant='dark'>
      <Container>
        <Navbar.Brand href="/" className='linktest'>My Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#peaceid" className='linktest'>Peace</Nav.Link>
            <Nav.Link href="#randomid" className='linktest'>Random</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div>
      <CarouselPage />
    </div>

    <div id="peaceid">
      <Peace />
    </div>

    <div id="randomid">
      <Random />
    </div>

    </div>
  )
}

export default Navigation