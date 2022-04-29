import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
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
                <h4 className="my-2">The Largest Perfume Warehouse</h4>
                <p className="my-2">We have the largest warehouse of perfumes in the whole world. The collection we have here is next level.</p>
                <button className="explore-btn rounded-pill">Explore</button>
            </div>
        </div>
    );
};

export default Header;
