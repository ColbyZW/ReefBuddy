import { Component } from "react";
import { Container } from 'react-bootstrap'
import { Outlet, useLocation } from "react-router-dom";

export default class ViewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            params: null
        }
    }


    render() {
        return (
            <Container>
                <Outlet/>
            </Container>
        )
    }
}