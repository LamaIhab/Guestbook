import React from "react";
import axios from "axios";

export default class SignUpForm extends React.Component {
  state = {
    userName: "",
    displayName: "",
    password: ""
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
          // go to another page will handle later
        } else alert(res.data.msg);
      })
      .catch(err => {
        alert(err.data.msg);
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.signUp}>
          <label>Full Name</label>
          <input
            name="displayName"
            type="text"
            placeholder="fullname"
            value={this.state.displayName}
            onChange={this.onChange}
          />
          <br></br>
          <label>username</label>
          <input
            name="userName"
            type="text"
            placeholder="username"
            value={this.state.userName}
            onChange={this.onChange}
          />

          <br></br>
          <label>Password</label>
          <input
            name="password"
            type="text"
            placeholder="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}
