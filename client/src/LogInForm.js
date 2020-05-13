import React from "react";
import axios from "axios"; // to call backend
import {Link,BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import MessagesPage from './MessagesPage'
export default class LogInForm extends React.Component {
  state = {
    userName: "",
    password: "",
    loggedin:null
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
         this.setState({loggedin:true})
        } 
          alert(res.data.msg);
        
      })
      .catch(err => {
        console.error(err);
      });
  };
  render() {
    if(this.state.loggedin){
      return (
      <MessagesPage username={this.state.userName}/>
      )
    }
   
    return (
      <form onSubmit={this.logIn}>
        <label>
          <p style={inputStyle}><input 
            name="userName"
            type="text"
            placeholder="username"
            value={this.state.userName}
            onChange={this.onChange}
          /></p>
        </label>
        <label>
          <br />
          
          <p style={inputStyle}><input
            name="password"
            type="text"
            placeholder="password"
            value={this.state.password}
            onChange={this.onChange}
          /></p>
        </label>
     
    
        <p style={inputStyle}><input style={btnStyle} type="submit" value="Login" /></p>
      </form>
    );
  }
}

const inputStyle = {
  textAlign:'center',
  fontFamily:'Ariel',
  fontStyle:'Italic',
  color:'#87CEFA',

  padding:'1px',
 
  
  //fontSize:30,
  fontWeight:'bold'
  //fontWeight:'bold'
}

const btnStyle={
  background:'#A9A9A9',
  color:'#',
  //:'10px'
  
  }
