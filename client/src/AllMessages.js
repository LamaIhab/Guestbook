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
    // get username first and check if it's null not signed in will handle later
    const msg = prompt("type your message:");
    axios
      .post(`http://localhost:5000/postMessage`, {
        username: "lama.ihab",
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
    // will get username from signed in later
    axios
      .post(`http://localhost:5000/deleteMessage/${id}`, {
        username: "lama.ihab"
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
        {this.state.messages.map(message => (
          <MessagesRow
            key={message._id}
            message={message}
            deleteMsg={this.deleteMsg}
          />
        ))}
      </div>
    );
  }
}
