import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'

export default function Navigation() {

    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        checkStorage();
        return () => {}
    }, [isLogged])

    const checkStorage = () =>{
        if(localStorage.getItem("authToken")){
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }
    
    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        setIsLogged(false);
    }
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/">
                    Mascota Feliz
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link as={NavLink} to="/mision">
                            Misión
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/vision">
                            Visión
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contacto">
                            Contacto
                        </Nav.Link>
                        <NavDropdown title="Admin"> 
                            <NavDropdown.Item as={NavLink} to="/admin">Administrador</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/adviser">Asesor</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ms-auto">
                        {!isLogged ? (
                            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        ) : (
                            <Nav.Link as={NavLink} to="/login" onClick={ logoutHandler }>Logout</Nav.Link>
                        )}
                            
                        <Nav.Link as={NavLink} to="/register">Registro</Nav.Link>
                        <Nav.Link as={NavLink} to="/userAccount">Mi Cuenta</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
