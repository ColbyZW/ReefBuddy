import { Component } from "react";
import { Alert, Button } from "react-bootstrap";

export default class AlertMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
    }
  }
  render() {
    return (
      <>
        <Alert show={this.state.show} variant={this.props.success ? "success" : "danger"}>
          <Alert.Heading>{this.props.success ? "Success!" : "Error!"}</Alert.Heading>
          <p>
            {this.props.message}
          </p>
          <div className="d-flex justify-content-end">
            <Button onClick={() => {
              this.setState({ show: false })
              this.props.onClose();
            }} variant={this.props.success ? "outline-success" : "outline-danger"}>
              Ok!
            </Button>
          </div>
        </Alert>
      </>
    );
  }

}