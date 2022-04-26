import axios from "axios";
import { Component } from "react";
import { Container } from "react-bootstrap";
import ProfileBox from "../components/profileBox.component";
import Login from "../components/login.component";


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            refresh: false
        }
        
        this.refresh = this.refresh.bind(this)
    }

    componentDidMount() {
        axios.get('/user')
            .then(res => {
                if(!res.data) {
                    this.setState({loggedIn: false});
                } else {
                    this.setState({loggedIn: true});
                }
            })
    }

    refresh() {
        this.setState({refresh: !true});
    }


    render() {
        return(
            <Container>
                {this.state.loggedIn ? <ProfileBox/> : <Login refresh={this.refresh}/>}
            </Container>
            
        )
    }
}