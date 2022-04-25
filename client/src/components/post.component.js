import axios from 'axios';
import React, { Component } from 'react';
import { Card, Button, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            content: null,
            author: null,
            id: null,
        }
        this.removePost = this.removePost.bind(this);
    }

    removePost() {
        axios.delete(`/post/${this.state.id}`)
            .then(res => {
                this.props.refresh();
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentDidMount() {
        this.setState({ author: this.props.author });
        this.setState({ title: this.props.title });
        this.setState({ content: this.props.content });
        this.setState({ id: this.props.id });
    }

    render() {
        return (
            <Card className="post_card" >
                <Card.Header className="d-flex align-items-center justify-content-between">{this.state.author ? this.state.author : "Unknown"}<Button variant="none" className="ml-auto" onClick={() => this.removePost()}><Image src={require('../images/triplemenu.png')}></Image></Button></Card.Header>
                <Card.Body>
                    <Card.Title>{this.state.title ? this.state.title : "Loading..."}</Card.Title>
                    <Button className="btn-sm mt-3">
                        <Link state={{id: this.state.id}} to={"/viewreef/"+this.state.id} className="text-reset text-decoration-none">Read More</Link>
                    </Button>
                </Card.Body>
            </Card>
        )
    }
}