import React, { Component } from 'react';
import { Container } from 'react-bootstrap'

export default class Home extends Component {


    componentDidMount() {

    }
    render() {
        return (
            <Container className="home-background d-flex justify-content-center " fluid >
                <Container className="home-text mx-auto text-center">
                    <Container className="text-home">
                        <h1 className="mb-3 fs-1 fw-bolder">ReefBuddy</h1>
                        <p>This is a forum for reeftank enthusiasts to come and share their love for the hobby and for beginners to come and get some helpful advice!  Make yourself at home and keep on reefin'!</p>
                    </Container>
                </Container>
            </Container>
        )
    }
}