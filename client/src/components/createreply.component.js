import React, { Component } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap'
import axios from 'axios';

export default class CreateReply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            content: "",
            id: null
        } 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getName = this.getName.bind(this);
        this.getContent = this.getContent.bind(this);
    }
    getName(event){
        this.setState({name: event.target.value})
    }

    getContent(event) {
        this.setState({content: event.target.value})
    }

    componentDidMount() {
        this.setState({id: this.props.id});
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post(`/post/${this.state.id}`, {username: this.state.name, comment: this.state.content})
            .then(res =>{ 
                console.log("In the then block")
            })
            .catch(err => {

            })
        this.props.close();
            
    }

    render() {
        return (
            <Container>
                <Card.Body className="border-top">
                <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Enter Your Name</Form.Label>
                            <Form.Control onChange={this.getName} value={this.state.name} placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="content">
                            <Form.Label>Post Content</Form.Label>
                            <Form.Control onChange={this.getContent} value={this.state.content} as="textarea" placeholder="Blah blah.." />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Container>
        )
    }
}