import { Outlet } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <NavBar />
          </div>
        </div >
        <div>
          <Outlet />
        </div>
      </div>

    );
  }
}

export default App;
