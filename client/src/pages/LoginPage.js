import React , { useState, useEffect } from 'react'
import { Form, Container, Row, Col, Button, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Navigation from '../components/Navigation'

import axios from "axios"
import ReCAPTCHA from 'react-google-recaptcha'

export default function LoginPage({ history }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if(localStorage.getItem("authToken")){
            history.push("/userAccount")
        }
    }, [history])

    const LoginHandleSubmit = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-type": "application/json"
            },
        };

        try {
            const { data } = await axios.post(
                "api/auth/login",
                { email, password },
                config
            )

            localStorage.setItem("authToken", data.token);

            history.push("/userAccount");
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }

    }
    
    const reRef = React.createRef();
    
    return (
        <Container className="mt-5">
                <h2>Login</h2>
                {error && <span>{error}</span>}
                <Row>
                    <Col xs={6}>
                    <Form onSubmit={ LoginHandleSubmit }>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" 
                                placeholder="Enter email" 
                                required
                                value = { email }
                                onChange = {(e) => setEmail(e.target.value)}
                                />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" 
                                placeholder="Password"
                                required
                                value = { password }
                                onChange = {(e) => setPassword(e.target.value)}
                                />
                        </Form.Group>
                        
                            <Nav.Link as={NavLink} to="/vision">
                                Recuperar Contraseña
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/vision">
                                Cambiar Contraseña
                            </Nav.Link>
                        
                        <Button variant="primary" type="submit"  > 
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
