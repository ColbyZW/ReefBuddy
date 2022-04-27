import axios from "axios";
import { Component } from "react";
import { Container } from "react-bootstrap";
import ProfileBox from "../components/profileBox.component";
import AuthScreen from "../components/authScreen.component";


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: null
        }
        this.setProfileData = this.setProfileData.bind(this);
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

    setProfileData(data) {
        this.setState({profileData: data})
    }



    render() {
        return (
            <Container>
                {this.state.profileData ? <ProfileBox setData={this.setProfileData} data={this.state.profileData}/> : <AuthScreen setData={this.setProfileData}/>}
            </Container>

        )
    }
}