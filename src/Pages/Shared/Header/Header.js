import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#00a3c8",
    };
    return (
        <Navbar className="nav-style sticky-top" expand="xl">
            <Container fluid>
                <Navbar.Brand className="p-0">
                    <NavLink to="/">
                        {/* <img className="logo" src={logo} alt="logo" /> */}
                        <h3>Codeaxes</h3>
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="navbarScroll"
                    className="bg-white"
                />

                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                        <NavLink activeStyle={activeStyle} to="/home">
                            Home
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/about">
                            About us
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/explore">
                            Explore
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
