import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

export default function ProfileBox(props) {
    const [data, setData] = useState(null);


    useEffect(() => {
        setData(props.data);
    })

    function logout() {
        axios.get('/user/logout');
        setData(null);
        props.logout(null);
    }


    return (
        <Container className="mt-5">
            <Card className="border-dark">
                <Card.Body className="border-bottom p-4">
                    <Card.Title>Username:{props.data.username}<Button className="float-end" onClick={() => logout()}>Logout</Button></Card.Title>
                    <Card.Text>Bio/Description Goes Here</Card.Text>
                </Card.Body>
                <Card.Body className="border-bottom p-4">
                    <Card.Title>My Posts</Card.Title>
                    <ListGroup>
                        <ListGroupItem>Blah</ListGroupItem>
                        <ListGroupItem>Blah</ListGroupItem>
                        <ListGroupItem>Blah</ListGroupItem>
                    </ListGroup>
                </Card.Body>
                <Card.Body className="p-4">
                    <Card.Title>Following:</Card.Title>
                    <ListGroup>
                        <ListGroupItem>Blah</ListGroupItem>
                        <ListGroupItem>Blah</ListGroupItem>
                        <ListGroupItem>Blah</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Container>
    )

}