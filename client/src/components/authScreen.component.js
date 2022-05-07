import { Component, useState } from "react";
import Register from "./register.component";
import Login from "./login.component";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useOutletContext } from "react-router-dom";


export default function AuthScreen(props) {
    const [login, setLogin] = useOutletContext();
    const [screen, setScreen] = useState(true);


    return (
        <Container>
            {screen && <Login setData={setLogin} change={setScreen} />}
            {!screen && <Register setData={setLogin} change={setScreen} />}
        </Container>
    )


}