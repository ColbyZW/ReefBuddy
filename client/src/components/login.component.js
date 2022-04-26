import axios from "axios"
import { Component } from "react"
import { Container, Button } from "react-bootstrap"


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            refresh: false
        }
        this.login = this.login.bind(this)
    }

    login() {
        axios.get('/user/login')
        this.props.refresh();
    }

    render() {
        return (
            <Container>
                Login!
                <Button onClick={() => this.login()}>Click Me!</Button>
            </Container>
        )
    }

}