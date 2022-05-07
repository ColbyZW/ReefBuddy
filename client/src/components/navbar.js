import { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Container, Navbar } from 'react-bootstrap'


export default function TopNavBar(props) {

  useEffect(() => {
    console.log(props);
  })

  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container className="mx-3">
        <Link to="/home" className="text-decoration-none text-white">
          <Navbar.Brand >
            ReefBuddy
          </Navbar.Brand>
        </Link>
        <Nav className="me-auto">

          <Nav.Link className="nav-links">
            <Link className="text-decoration-none text-reset" to="/reefs">
              Browse Reefs
            </Link>
          </Nav.Link>
          {props.login ? <Nav.Link>
            <Link className="text-decoration-none text-reset" to="/post">
              Create A Post
            </Link>
          </Nav.Link> : <></>}
          

          <Nav.Link>
            {props.login ? <Link className="text-decoration-none text-reset" to="/user">
              Profile
            </Link> : <Link className="text-decoration-none text-reset" to ="/login">
              Login
            </Link> }
            
          </Nav.Link>
        </Nav>

      </Container>
    </Navbar>
  )

}