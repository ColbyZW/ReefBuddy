import axios from "axios"
import { Component } from "react"
import { Container, Button, Form, Card, Alert } from "react-bootstrap"



export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            username: "",
            passwordMatch: true,
            duplicate: false,
            success: false
        }
        this.getEmail = this.getEmail.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.getConfPassword = this.getConfPassword.bind(this);
        this.getUsername = this.getUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getEmail(event) {
        this.setState({ email: event.target.value });
    }

    getPassword(event) {
        this.setState({ password: event.target.value });
        if (event.target.value != this.state.confPassword) {
            this.setState({ passwordMatch: false });
        } else {
            this.setState({ passwordMatch: true })
        }
    }

    getConfPassword(event) {
        this.setState({ confPassword: event.target.value })
        if (this.state.password != event.target.value) {
            this.setState({ passwordMatch: false });
        } else {
            this.setState({ passwordMatch: true });
        }
    }

    getUsername(event) {
        this.setState({ username: event.target.value })
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        console.log(form);
        if (this.state.passwordMatch) {
            axios.post('/user', { email: this.state.email, password: this.state.password, username: this.state.username })
                .then(res => {
                    if (res.data === 500) {
                        this.setState({ duplicate: true })
                    } else {
                        this.props.setData(res.data);
                        this.setState({ confPassword: "", password: "", email: "", username: "", duplicate: false, success: true })
                    }
                })
        }
        event.preventDefault();
    }

    render() {
        return (
            <Container className="mt-4">
                {this.state.success ? <Alert className="my-1" onClose={() => this.setState({success: false})} variant="success" dismissible>Successfully Created Account!</Alert> : <></>}
                <Card>
                    <Card.Body>
                        <Card.Title>Register</Card.Title>
                        <Form onSubmit={this.handleSubmit} >
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={this.getEmail} required value={this.state.email} type="email" placeholder="Enter email" />
                                {this.state.duplicate ? <Alert className="py-1" variant="danger">Email already in use!</Alert> : <></>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={this.getUsername} required value={this.state.username} type="text" placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.getPassword} required value={this.state.password} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="confirmPassword" >
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control onChange={this.getConfPassword} required pattern={this.state.password} value={this.state.confPassword} type="password" placeholder="Confirm Password" />
                                {this.state.passwordMatch ? <></> : <Alert className="py-1" variant="danger">Passwords must match!</Alert>}
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <Button className="mt-3" onClick={()=>this.props.change()}>Have an account?  Login here.</Button>
                    </Card.Body>
                </Card>
                
            </Container>
        )
    }

}