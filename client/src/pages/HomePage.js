import { Container, Carousel, Row, Col, Card, Form, FormControl, Button } from "react-bootstrap"

export default function HomePage() {
    return (
        <Container fluid>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="/images/eric-ward-ISg37AI2A-s-unsplash.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/eric-ward-ISg37AI2A-s-unsplash.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/eric-ward-ISg37AI2A-s-unsplash.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                <Container>
            <div className="mt-4 mb-4">
                <h3>Buscador de Productos y Servicios</h3>

                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
                </Container>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="/images/eric-ward-ISg37AI2A-s-unsplash.jpg" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            
        </Container>
    )
}
