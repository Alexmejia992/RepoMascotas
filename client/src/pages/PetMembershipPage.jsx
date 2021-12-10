import React , { useState, useEffect } from 'react'
import { Form, Container, Row, Col, Button, Nav } from 'react-bootstrap'
import { useForm } from "react-hook-form";

import axios from 'axios';

function PetMembershipPage({ history }) {
    // const [petname, setPetname] = useState('');
    // const [species, setSpecies] = useState('');
    // const [color, setColor] = useState('');
    // const [breed, setBreed] = useState('');
    // const [gender, setGender] = useState('');
    // const [petimage, setPetimage] = useForm();
    const { register, handleSubmit } = useForm();

    const [error, setError] = useState('');


    useEffect(() => {
        if(localStorage.getItem("authToken")){
            history.push("/petMembership")
        }
    }, [history]);

    const onSubmit = async (data)  => {
        // e.preventDefault();
         const { petname, species, breed, color } = data;
        const formData = new FormData();
        Object.values(data.petimage).forEach(pet => formData.append('petimage', pet));
        for (var key in data ) {
            formData.append(key, data[key]);
        }
        // const {firstName, lastName } = data
        // alert(JSON.stringify({ petname  }));
        try {
            const res = await axios.post('/api/petregister',  formData);
            console.log(res)
            // localStorage.setItem("authToken", data.token)
            history.push("/userAccount")
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        } 
    }
    
    return (
        <Container className="mt-5">
            <Row>
                <Col xs={12} sm={8}>
                {error && <span>{error}</span>}
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre Mascota</Form.Label>
                            <Form.Control {...register("petname")}
                                placeholder="Bruno"
                                required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Especie</Form.Label>
                            <Form.Control {...register("species")}
                                placeholder="Cánidos"
                                required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Raza</Form.Label>
                            <Form.Control {...register("breed")}
                                placeholder="Criollo"
                                required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Color</Form.Label>
                            <Form.Control {...register("color")}
                                placeholder="Café"
                                required />
                        </Form.Group>
                        
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Imagen de tu Mascota</Form.Label>
                            <Form.Control type="file" 
                                label="Select image"
                                name="petimage"
                                 {...register("petimage")}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
       </Container>
    )
}

export default PetMembershipPage

