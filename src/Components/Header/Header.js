import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from './../../logo.png'
import useAuth from '../../hooks/useAuth';



const Header = () => {
    const { logOut, user } = useAuth();

    return (

        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>

                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="170"
                            height="70"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>


                            <Link className="linkStyle" to="/home">Home</Link>
                            <Link className="linkStyle" to="/about">About</Link>
                            <Link className="linkStyle" to="/services">Service</Link>
                            <Link className="linkStyle" to="/blogs">Blogs</Link>

                            <Link className="linkStyle" to="/contact">contact</Link>

                            {
                                user.email ? <NavDropdown className="navTitle" title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item><Link className="linkStyle" to="/allorder">My Order</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link className="linkStyle" to="/addservice">Add service</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link className="linkStyle" to="/manageAll">Manage All Order</Link></NavDropdown.Item>

                            </NavDropdown> : ''
                            }



                        </Nav>
                        <div className="d-flex">
                            {
                                user.email ? <div><img className="rounded-circle me-3" width="40px" src={user.photoURL} alt="" /><span className="me-2">{user.displayName}</span></div> : ''
                            }


                            {
                                user.email ? <Button className="btn" variant="warning" onClick={logOut}>LogOut</Button>
                                    :
                                    <Link to="/login">
                                        <Button className="btn" variant="info">Login</Button>
                                    </Link>
                            }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;