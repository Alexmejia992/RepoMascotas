import { Form, Container, Row, Col, Button } from 'react-bootstrap'

export default function ContactPage() {
    return (
        <Container className="mt-5">
                <h2>Contacto</h2>
                <Row>
                    <Col xs={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Ryan Ray" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <Button variant="primary">Enviar</Button>{' '}
                    </Col>
                </Row>
        </Container>
        

    )
}
