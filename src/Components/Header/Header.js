import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
            <Navbar className="custom-nav" collapseOnSelect expand="lg" bg="light">
                <Container className="nav-container text-center">
                    <Navbar.Brand className="d-md-none" as={Link} to="/">PERFUMANIA</Navbar.Brand>
                    <Navbar.Toggle style={{ border: "1px solid #fff", backgroundColor: '#fff' }} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                        </Nav>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="blogs">
                                Blogs
                            </Nav.Link>
                            <Nav.Link as={Link} to="login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;
