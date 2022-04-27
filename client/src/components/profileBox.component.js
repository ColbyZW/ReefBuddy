import { Component } from "react";
import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default class ProfileBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        this.setState({data: this.props.data});
        console.log(this.props);
    }

    render() {
        return (
            <Container className="mt-5">
                <Card className="border-dark">
                    <Card.Body className="border-bottom p-4">
                        <Card.Title>Username:{this.props.data.username}</Card.Title>
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
}