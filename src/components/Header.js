import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../logo.svg';
import { NavLink } from "react-router-dom"
import Image from 'react-bootstrap/Image';

export function Header() {
    return (
        <>
            <Navbar sticky="top" key='sm' expand='sm' className="bg-body-tertiary mb-3">
                <Navbar.Brand to="/" as={NavLink}>
                    <Image src={logo} style={{ width: '90px' }} alt="react" />
                </Navbar.Brand>

                <Container fluid>
                    <Navbar.Toggle aria-controls='offcanvasNavbar-expand-sm' />
                    <Navbar.Offcanvas
                        id='offcanvasNavbar-expand-sm'
                        aria-labelledby='offcanvasNavbarLabel-expand-sm'
                        placement="top"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel-expand-sm'>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-grow-1 pe-3">
                                <Nav.Link to="/" as={NavLink}> Home </Nav.Link>
                                <Nav.Link to="/contact" as={NavLink}> Contact Us </Nav.Link>
                                <Nav.Link to="/about" as={NavLink}> About</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}