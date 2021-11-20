import React , { Component } from 'react'
import { Form, Container, Row, Col, Button, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import axios from "axios"
import ReCAPTCHA from 'react-google-recaptcha'

export default function LoginPage() {
    const reRef = React.createRef();
    
    return (
        <Container className="mt-5">
                <h2>Login</h2>
                <Row>
                    <Col xs={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                            <Nav.Link as={NavLink} to="/vision">
                                Recuperar Contraseña
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/vision">
                                Cambiar Contraseña
                            </Nav.Link>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
                <ReCAPTCHA 
                    sitekey='6LczRCkdAAAAAM3fxlBTqVNjKWE633lTwMDK_eRf'
                    size="normal"
                    ref={reRef}
                />
        </Container>
            
    )
}
