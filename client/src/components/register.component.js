import axios from "axios"
import { useState, useEffect } from "react"
import { Container, Button, Form, Card, Alert } from "react-bootstrap"
import { Navigate, useOutletContext } from "react-router-dom";



export default function Register(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPass, setConfPass] = useState("");
    const [username, setUsername] = useState("");
    const [match, setMatch] = useState(true);
    const [duplicate, setDuplicate] = useState(false);
    const [success, setSuccess] = useState(false);
    const [login, setLogin] = useOutletContext();
    

    function getConfPassword(event) {
        setConfPass(event.target.value);
        if (password != event.target.value) {
            setMatch(false);
        } else {
            setMatch(true);
        }
    }



    function handleSubmit(event) {
        const form = event.currentTarget;
        console.log(form);
        if (match) {
            axios.post('/user', { email: email, password: password, username: username })
                .then(res => {
                    if (res.data === 500) {
                        setDuplicate(true);
                    } else {
                        setPassword("");
                        setEmail("");
                        setUsername("");
                        setConfPass("");
                        setDuplicate(false);
                        setSuccess(true);
                        setTimeout(() => {props.setData(res.data)}, 1200);
                    }
                })
        }
        event.preventDefault();
    }


        return (
            <Container className="mt-4">
                {login && <Navigate replace to="/user"/>}
                {success ? <Alert className="my-1" onClose={() => setSuccess(false)} variant="success" dismissible>Successfully Created Account!</Alert> : <></>}
                <Card>
                    <Card.Body>
                        <Card.Title>Register</Card.Title>
                        <Form onSubmit={handleSubmit} >
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={e=>setEmail(e.target.value)} required value={email} type="email" placeholder="Enter email" />
                                {duplicate ? <Alert className="py-1" variant="danger">Email already in use!</Alert> : <></>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={e=>setUsername(e.target.value)} required value={username} type="text" placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={e=>setPassword(e.target.value)} required value={password} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="confirmPassword" >
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control onChange={e=>getConfPassword(e)} required pattern={password} value={confPass} type="password" placeholder="Confirm Password" />
                                {match ? <></> : <Alert className="py-1" variant="danger">Passwords must match!</Alert>}
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <Button className="mt-3" onClick={()=>props.change(true)}>Have an account?  Login here.</Button>
                    </Card.Body>
                </Card>
                
            </Container>
        )
    

}