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
      this.setState({ messages: res.data.data }); // check update state to render automatically
    });
  }
  render() {
    //console.log(this.state.messages)
    return (
      <div>
        {this.state.messages.map(message => (
          <MessagesRow key={message._id} message={message} />
        ))}
      </div>
    );
  }
}
