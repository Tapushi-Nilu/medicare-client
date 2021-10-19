import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../images/Medicare-eye-clinic-logo.png';
import './Header.css'

const Header = () => {

    const {user, logOut} = useAuth();

    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink className="menu" to="/home">Home</NavLink>
                    <NavLink className="menu" to="/services">Our Services</NavLink>  
                    <NavLink className="menu" to="/contact">Contact Us</NavLink> 
                    {user.email && <span className="user-name"><i className="fas fa-user-circle"></i>{user.displayName}</span>}
                    { user.email ?
                        <button className="top-btn" onClick={logOut}>Logout</button>
                            :
                        
                        <Link to="/login"><button className="top-btn">Login <i class="fa fa-arrow-circle-right mx-2"></i></button></Link>
                        
                        
                        
                    } 
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;