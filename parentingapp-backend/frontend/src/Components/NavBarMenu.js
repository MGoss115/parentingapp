import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBarMenu() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Kids</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="show-kids-nav" to="/">Kids</NavLink>
                <NavLink className="add-kid-nav" to="/addkid">Add Kid</NavLink>
                <NavLink className="add-kid-nav" to="/:id">Kid Detail</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}

export default NavBarMenu
