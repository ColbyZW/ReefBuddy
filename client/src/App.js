import { Outlet } from "react-router-dom";
import React, { Component, useEffect, useState } from "react";
import NavBar from "./components/navbar";
import axios from "axios";

export default function App() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    if(!login) {
      axios.get('/user')
        .then(res => {
          if(res.data._id) {
            setLogin(res.data);
          }
        })
    }
  })


    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <NavBar login={login}/>
          </div>
        </div >
        <div>
          <Outlet context={[login, setLogin]}/>
        </div>
      </div>

    );
}


