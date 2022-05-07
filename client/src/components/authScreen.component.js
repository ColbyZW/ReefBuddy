import { Component, useState } from "react";
import Register from "./register.component";
import Login from "./login.component";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useOutletContext } from "react-router-dom";


export default function AuthScreen(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         login: true
    //     }
    //     this.changeScreen = this.changeScreen.bind(this);
    // }
    const [login, setLogin] = useOutletContext();
    const [screen, setScreen] = useState(true);
    // componentDidMount() {
    //     console.log(this.props);
    // }

    // changeScreen() {
    //     this.setState({login: !this.state.login});
    // }


    return (
        <Container>
            {screen && <Login setData={setLogin} change={setScreen} />}
            {!screen && <Register setData={setLogin} change={setScreen} />}
        </Container>
    )


}