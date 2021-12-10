import { useState, useEffect } from 'react'
import { Col, Container, Row, Card, Button } from "react-bootstrap"
import axios from "axios"
import Navbar from "../components/Navbar"

export default function UserAccountPage() {
    const [error, setErrors] = useState("");
    const [privateData, setPrivateData] = useState("");

    useEffect(() => {
        const fetchPrivateData = async () =>{
            const config = {
                headers: { 
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                },
            };
            try {
                const { data } = await axios.get('/api/private', config);
                setPrivateData(data.data);
            } catch (error) {
                localStorage.removeItem('authToken');
                setErrors("No estás autorizado para acceder a esta ruta.");
            }
        };
        fetchPrivateData();
    }, [])

    return (
        <>
            <Navbar />
            <Container className="mt-5">
                <Row md={8}>
                    <Col md={6}>
                        <Card>
                            <Card.Header>Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </ Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </ Col>
                </Row>
            </Container>
        </>    
        
    )
}
