import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Form, Container } from 'react-bootstrap'

import AlertMessage from '../components/alert.component'

export default class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            content: null,
            title: null,
            success: false,
            message: null,
            errorMsg: null,
            showCard: false
        }
        this.getContent = this.getContent.bind(this);
        this.getName = this.getName.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.handleAlertClose = this.handleAlertClose.bind(this);
    }

    getName(event){
        this.setState({name: event.target.value})
    }

    getContent(event) {
        this.setState({content: event.target.value})
    }

    getTitle(event) {
        this.setState({title: event.target.value})
    }

    clearForm() {
        this.setState({title:"", content: "", name:""});
    }

    handleSubmit(event) {
        axios.post('/post', {author: {username: this.state.name}, title: this.state.title, content: this.state.content})
            .then(res =>{ 
                this.setState({success: true});
                this.setState({showCard: true});
                this.setState({message: res.data});
            })
            .catch(err => {
                console.log(err);
                this.setState({showCard: true});
                this.setState({errorMsg: "Validation failed, missing fields."});
                this.setState({success: false});
            })
        this.clearForm();
        event.preventDefault();
    }

    handleAlertClose() {
        this.setState({showCard: false});
    }


    render() {
        return (
            <Container fluid="md" className="mt-3">
                {this.state.showCard ? <AlertMessage success={this.state.success} message={this.state.success ? this.state.message : this.state.errorMsg} onClose={this.handleAlertClose}/> : <></>}
            <Card>
                <Card.Header>Add A Post!</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Enter a Name</Form.Label>
                            <Form.Control onChange={this.getName} value={this.state.name} placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Enter a Title</Form.Label>
                            <Form.Control onChange={this.getTitle} value={this.state.title} placeholder="A great title" />
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
                <Card.Body>

                </Card.Body>
            </Card>
            </Container>
        )
    }
}