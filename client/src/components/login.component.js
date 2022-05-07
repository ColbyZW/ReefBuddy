import axios from "axios";
import { Component } from "react";
import {Container, Card, Alert, Form, Button} from 'react-bootstrap'
import { Navigate } from "react-router-dom";


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            success: true,
            data: null,
            loggedIn: false
        }

        this.getEmail = this.getEmail.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        axios.post('/user/login', {email: this.state.email, password: this.state.password})
            .then(res => {
                if(res.data) {
                    console.log(res);
                    this.props.setData(res.data);
                    this.setState({success: true});
                    this.setState({loggedIn: true});

                } else {
                    this.setState({success: false});
                }
            })
        event.preventDefault();
    }

    getEmail(event) {
        this.setState({email: event.target.value});
    }

    getPassword(event) {
        this.setState({password: event.target.value});
    }



    render() {
        return (
            <Container className="mt-4">
                {this.state.loggedIn && <Navigate replace to="/user"/>}
                {this.state.success ? <></> : <Alert className="my-1" onClose={() => this.setState({success: true})} variant="danger" dismissible>Email or Password incorrect!</Alert>}
                <Card>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Form onSubmit={this.handleSubmit} >
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={this.getEmail} required value={this.state.email} type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.getPassword} required value={this.state.password} type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <Button className="mt-3" onClick={()=>this.props.change()}>Need to make an account?  Register here.</Button>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}