import React, { Component, useState } from 'react';
import axios from 'axios';
import { Card, Button, Form, Container } from 'react-bootstrap'

import AlertMessage from '../components/alert.component'
import { Navigate, useOutletContext } from 'react-router-dom';

export default function PostForm(props) {

    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [errorMsg, setError] = useState("");
    const [showCard, setShow] = useState(false);
    const [postId, setPost] = useState(null);
    
    const [login, setLogin] = useOutletContext();

    function clearForm() {

        setTitle("");
        setContent("");
        setName("");
    }

    function handleSubmit(event) {
        axios.post('/post', { author: { username: name }, title: title, content: content })
            .then(res => {
                setPost(res.data.postId);
                setShow(true);
                setMessage(res.data.msg);
                setSuccess(true);
            })
            .catch(err => {
                setShow(true);
                setError("Validation failed, missing fields.");
                setSuccess(false);
            })
        clearForm();
        event.preventDefault();
    }

    function handleAlertClose() {
        setShow(false);
    }



    return (
        <Container fluid="md" className="mt-3">
            {!login && <Navigate replace to="/login"/>}
            {showCard ? <AlertMessage success={success} message={success ? message : errorMsg} onClose={handleAlertClose} /> : <></>}
            {success && <Navigate replace to={`/viewreef/${postId}`}/>}
            <Card>
                <Card.Header>Add A Post!</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Enter a Name</Form.Label>
                            <Form.Control onChange={e=>setName(e.target.value)} value={name} placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Enter a Title</Form.Label>
                            <Form.Control onChange={e=>setTitle(e.target.value)} value={title} placeholder="A great title" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="content">
                            <Form.Label>Post Content</Form.Label>
                            <Form.Control onChange={e=>setContent(e.target.value)} value={content} as="textarea" placeholder="Blah blah.." />
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