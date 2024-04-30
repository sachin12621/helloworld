import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';

export function Footer() {
    return (
        <footer className="bg-dark text-light py-5">
            <Container>
                <Row>
                    <Col md={6} lg={4} className="mb-4">
                        <div className='d-grid'>
                            <Nav.Link to="/" as={NavLink}> Home </Nav.Link>
                            <Nav.Link to="/contact" as={NavLink}> Contact Us </Nav.Link>
                            <Nav.Link to="/about" as={NavLink}> About</Nav.Link>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <h5>Connect with us</h5>
                        <div>
                            <a href="#!" className="text-light me-3">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#!" className="text-light me-3">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#!" className="text-light">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <h5>Contact Info</h5>
                        <div>
                            <p>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                                123 Street, City, Country
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhone} className="me-2" />
                                +1 234 567 890
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                                example@example.com
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
