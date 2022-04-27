import { Component } from "react";
import Register from "./register.component";
import Login from "./login.component";
import { Container } from "react-bootstrap";


export default class AuthScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true
        }
        this.changeScreen = this.changeScreen.bind(this);
    }

    changeScreen() {
        this.setState({login: !this.state.login});
    }

    render() {
        return (
            <Container>
                {this.state.login ? <Login setData={this.props.setData} change={this.changeScreen}/> : <Register setData={this.props.setData} change={this.changeScreen}/>}
            </Container>
        )
    }

}