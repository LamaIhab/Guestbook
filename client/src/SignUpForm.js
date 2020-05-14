import React from "react";
import axios from "axios";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import MessagesPage from "./MessagesPage";
export default class SignUpForm extends React.Component {
  state = {
    userName: "",
    displayName: "",
    password: "",
    signup: null
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  signUp = e => {
    e.preventDefault();
    if (this.state.userName === "") alert("username cannot be empty");
    else if (this.state.displayName === "")
      alert("display name cannot be empty");
    else if (this.state.password === "") alert("password cannot be empty");
    axios
      .post("http://localhost:5000/signUp", {
        userName: this.state.userName,
        displayName: this.state.displayName,
        password: this.state.password
      })
      .then(res => {
        if (res.data.msg === "Signing up was successful") {
          this.setState({ signup: "/messages" });
        }
        alert(res.data.msg);
      })
      .catch(err => {
        alert(err.data.msg);
      });
  };
  render() {
    if (this.state.signup) {
      return <MessagesPage usernameSU={this.state.userName} />;
    } else
      return (
        <div>
          <form onSubmit={this.signUp}>
            <br />
            <p style={inputStyle}>
              Full Name: <br />
              <input
                name="displayName"
                type="text"
                placeholder="fullname"
                value={this.state.displayName}
                onChange={this.onChange}
              />
            </p>
            <br></br>

            <br />
            <p style={inputStyle}>
              User Name: <br />
              <input
                name="userName"
                type="text"
                placeholder="username"
                value={this.state.userName}
                onChange={this.onChange}
              />
            </p>

            <br></br>

            <br />
            <p style={inputStyle}>
              Password: <br />
              <input
                name="password"
                type="text"
                placeholder="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </p>
            <br />
            <p style={inputStyle}>
              <input style={btnStyle} type="submit" value="Sign Up" />
            </p>
          </form>
        </div>
      );
  }
}

const inputStyle = {
  textAlign: "center",
  //fontFamily:'Ariel',
  // fontStyle:'Italic',

  padding: "1px",

  //fontSize:30,
  fontWeight: "bold"
  //fontWeight:'bold'
};

const btnStyle = {
  background: "#A9A9A9",
  color: "#"
  //:'10px'
};
