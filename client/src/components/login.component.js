import axios from "axios";
import { Component, useState } from "react";
import {Container, Card, Alert, Form, Button} from 'react-bootstrap'
import { Navigate, useOutletContext } from "react-router-dom";


export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(true);
    const [data, setData] = useState(null);
    const [login, setLogin] = useOutletContext();

    function handleSubmit(event) {
        axios.post('/user/login', {email: email, password: password})
            .then(res => {
                if(res.data) {
                    props.setData(res.data);
                    setSuccess(true);
                } else {
                    setSuccess(false);

                }
            })
        event.preventDefault();
    }






        return (
            <Container className="mt-4">
                {login && <Navigate replace to="/user"/>}
                {success ? <></> : <Alert className="my-1" onClose={() => setSuccess(true)} variant="danger" dismissible>Email or Password incorrect!</Alert>}
                <Card>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Form onSubmit={handleSubmit} >
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={e=>setEmail(e.target.value)} required value={email} type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={e=>setPassword(e.target.value)} required value={password} type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <Button className="mt-3" onClick={()=>props.change()}>Need to make an account?  Register here.</Button>
                    </Card.Body>
                </Card>
            </Container>
        )
    
}