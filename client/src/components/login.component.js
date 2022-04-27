import axios from "axios";
import { Component } from "react";
import {Container, Card, Alert, Form, Button} from 'react-bootstrap'



export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            success: true,
            data: null
        }

        this.getEmail = this.getEmail.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        axios.post('/user/login', {email: this.state.email, password: this.state.password})
            .then(res => {
                if(res) {
                    console.log(res);
                    this.props.setData(res.data);
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
                {this.state.success ? <></> : <Alert className="my-1" onClose={() => this.setState({success: true})} variant="danger" dismissible>Email or Password incorrect!</Alert>}
                <Card>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Form onSubmit={this.handleSubmit} >
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={this.getEmail} required value={this.state.email} type="email" placeholder="Enter email" />
                                {this.state.duplicate ? <Alert className="py-1" variant="danger">Email already in use!</Alert> : <></>}
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