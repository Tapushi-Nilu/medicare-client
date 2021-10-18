import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../images/Medicare-eye-clinic-logo.png'

const Header = () => {

    const {user, logOut} = useAuth();

    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/services">Our Services</NavLink>  
                    <NavLink to="/contact">Contact Us</NavLink> 
                    {user.email && <span>{user.displayName}</span>}
                    { user.email ?
                        <button onClick={logOut}>Logout</button>
                        :
                        <NavLink to="/login">Login</NavLink>
                    } 
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;