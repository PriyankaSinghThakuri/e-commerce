import React, { Component } from "react";
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }
  render() {
    return (
      <div>
        <h4 className="m-1 p-2 border-bottom">Login</h4>

        {/* Email starts */}
        <div className="form-group from-row">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>

        {/* Email Ends */}

        {/* Password Starts */}
        <div className="form-group from-row">
          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        {/* Password Ends */}
        <div className="text-end">
          {this.state.message}
          <button className="btn btn-primary m-2" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  } // end of render
  //Executes when the user clicks on Login
  onLoginClick = async () => {
    console.log(this.state);

    var response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );

    var body = await response.json();
    console.log(body);
    if (body.length > 0) {
      //success msg
      this.setState({
        message: <span className="text-success">Successfully Logged-in</span>,
      });
    } else {
      //error msg
      this.setState({
        message: (
          <span className="text-danger">Invalid Login, please try again</span>
        ),
      });
    }
  };
}

export default Login;
