import axios from "axios";
import { Component } from "react";
import { Container } from "react-bootstrap";
import ProfileBox from "../components/profileBox.component";
import Register from "../components/register.component";


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: null
        }

    }

    componentDidMount() {
        axios.get('/user')
            .then(res => {
                if (res.data) {
                    console.log(res.data);
                    this.setState({profileData: res.data});
                }
            })
    }



    render() {
        return (
            <Container>
                {this.state.profileData ? <ProfileBox data={this.state.profileData}/> : <Register />}
            </Container>

        )
    }
}