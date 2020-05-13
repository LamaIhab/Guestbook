import React from "react";
import axios from "axios";
import MessagesRow from "./MessagesRow";

export default class AllMessages extends React.Component {
  state = {
    messages: [] // to store messages that i get from the back end
  };

  // WRITE A MESSAGE FUNCTION HERE
  componentDidMount() {
    axios.get("http://localhost:5000/getMessages").then(res => {
      this.setState({ messages: res.data.data });
    });
    // check update state to render automatically
  }
  postMsg = () => {
    if(!(this.props.username)&& (!this.props.usernameSU)){ // alerting if not signed in
      alert('please sign in/ sign up to post a message')
      return 
    }
    const msg = prompt("type your message:");
    const user = this.props.username? this.props.username: this.props.usernameSU
   

    axios
      .post(`http://localhost:5000/postMessage`, {
        username: user,
        description: msg
      })
      .then(res => {
        if (res.data.msg === "Message posted successfully!!") {
          this.setState({ messages: [...this.state.messages, res.data.data] });
        }
        alert(res.data.msg);
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteMsg = id => {
  
    const user = this.props.username? this.props.username: this.props.usernameSU
    console.log(user+'hhhhh')
    axios
      .post(`http://localhost:5000/deleteMessage/${id}`, {
        username: user
      })
      .then(res => {
        //console.log(this.state.username);
        if (res.data.msg === "Message deleted successfully") {
          this.setState({
            messages: [
              ...this.state.messages.filter(message => message._id !== id)
            ]
          });
        }
        alert(res.data.msg);
      });
  };

  render() {
    //console.log(this.state.messages)
    return (
      <div>
        <button onClick={this.postMsg}>Post a new Message</button>
        <ul>
        {this.state.messages.map(message => (
          <MessagesRow
            key={message._id}
            message={message}
            deleteMsg={this.deleteMsg} username={this.props.username} usernameSU = {this.props.usernameSU}
          />
        ))}
        </ul>
      </div>
    );
  }
}
