import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import "./Header.css";
import { signOut } from "firebase/auth";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Navbar className="custom-nav" collapseOnSelect expand="lg" bg="light">
            <Container className="nav-container text-center">
                <Navbar.Brand className="d-md-none" as={Link} to="/">
                    PERFUMANIA
                </Navbar.Brand>
                <Navbar.Toggle
                    style={{
                        border: "1px solid #fff",
                        backgroundColor: "#fff",
                    }}
                    aria-controls="responsive-navbar-nav"
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="about">
                            About
                        </Nav.Link>
                        {user ? (
                            <NavDropdown
                                title="Inventory"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item
                                    as={Link}
                                    to="/manageInventories"
                                >
                                    Manage Items
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/addItems">
                                    Add Items
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/myItems">
                                    My Items
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            ""
                        )}
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="blogs">
                            Blogs
                        </Nav.Link>
                        {user ? (
                            <button
                                onClick={() => signOut(auth)}
                                className="logout-btn rounded-pill ms-2"
                            >
                                Logout
                            </button>
                        ) : (
                            <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
