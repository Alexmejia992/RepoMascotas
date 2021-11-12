import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

export default function Navigation() {
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
                        <NavDropdown title="Admin"> 
                            <NavDropdown.Item as={NavLink} to="/admin">Administrador</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/adviser">Asesor</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        <Nav.Link as={NavLink} to="/register">Registro</Nav.Link>
                        <Nav.Link as={NavLink} to="/userAccount">Mi Cuenta</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
