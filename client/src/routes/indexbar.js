import { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";




export default class IndexBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [1],
            numPages: 0,
            posts: null
        }
    }


    componentDidMount() {
        axios.get('/reefs')
            .then(res => {
                this.setState({posts: res.data});
                this.setState({numPages: res.data.length})
            })
            .catch(err => {
                console.log(err);
            })

        
    }


    render() {
        return (
            <Container className="mt-3 px-0">
                <Container className="justify-content-right py-2 border border-dark border-1">
                    {this.state.posts ? this.state.posts.map((post, index) => {
                        if(index % 8 == 0) {
                        return <Link to={`${(index/8)+1}`}><Button className="mx-1">{(index/8)+1}</Button></Link>
                        }
                    }) : <></>}
                </Container>
                <Outlet/>
            </Container>

        )
    }

}