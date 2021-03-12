import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NavigationBar()
{
    return (
        <Navbar bg="dark" variant="dark" style={{ marginBottom: '2rem' }}>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav className="navbar-right">
            <Link to={"login"} className="nav-link">Login</Link>
            <Link to={"register"} className="nav-link">Register</Link>

        </Nav>
      </Navbar>
    );
}