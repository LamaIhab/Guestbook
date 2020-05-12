import React from "react";
import axios from "axios"; // to call backend
export default class LogInForm extends React.Component {
  state = {
    userName: "",
    password: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }; //setting state for each input

  logIn = async e => {
    e.preventDefault();
    if (this.state.userName === "") alert("username cannot be empty");
    else if (this.state.password === "") alert("password cannot be empty");
    // send data to backend
    axios
      .post("http://localhost:5000/logIn", {
        userName: this.state.userName,
        password: this.state.password
      })
      .then(res => {
        if (res.data.msg === "signing in successfull!!") {
          // re direct to another page will handle later
        } else {
          alert(res.data.msg);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  render() {
    return (
      <form onSubmit={this.logIn}>
        <label>
          <input
            name="userName"
            type="text"
            placeholder="username"
            value={this.state.userName}
            onChange={this.onChange}
          />
        </label>
        <label>
          <input
            name="password"
            type="text"
            placeholder="password"
            value={this.state.password}
            onChange={this.onChange}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}
