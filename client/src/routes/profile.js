import axios from "axios";
import { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProfileBox from "../components/profileBox.component";
import AuthScreen from "../components/authScreen.component";
import { Navigate, useOutletContext } from "react-router-dom";


export default function Profile() {
    const [login, setLogin] = useOutletContext();


    return (
        <Container>
            {!login && <Navigate replace to="/login"/>}
            {login && <ProfileBox setData={login} data={login} logout={setLogin} />}
        </Container>

    )

}