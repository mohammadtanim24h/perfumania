import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <Navbar className="custom-nav" collapseOnSelect expand="lg" bg="light">
                <Container className="nav-container text-center">
                    <Navbar.Brand as={Link} to="/">PERFUMANIA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="login">Login</Nav.Link>
                            <Nav.Link as={Link} to="user">
                                User
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="banner-text text-center">
                <h2 className="my-2">Perfumania</h2>
                <h4 className="my-2">Your Perfect Stop for Fragrance</h4>
                <p className="my-2">A perfect Theme to build beautiful and unique Perfume store eCommerce websites. It comes with nice and clean design.</p>
            </div>
        </div>
    );
};

export default Header;
