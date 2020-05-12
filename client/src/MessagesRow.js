import React from "react";
import axios from "axios";

export default class MessagesRow extends React.Component {
  state = {
    username: this.props.message.username,
    description: this.props.message.description,
    time: this.props.message.time,
    id: this.props.message._id,
    replies: [], // render those under message handle later
    messages: this.props.messages
    //signedinCorrect:false to hide buttons will handle later
  };

  editMsg = () => {
    const edit = prompt("edit your message:", this.state.description); // will get username from signed in later
    if (edit === "" || edit === null) {
      alert("Message cannot be empty");
    } else {
      axios
        .put(`http://localhost:5000/editMessage/${this.state.id}`, {
          username: "lama.ihab",
          description: edit
        })
        .then(res => {
          if (res.data.msg === "Message updated successfully")
            this.setState({ description: edit });
          alert(res.data.msg);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  replyMsg = () => {
    const reply = prompt("please enter the reply:"); // will get username from signed in later
    if (reply === "" || reply === null) {
      alert("Reply cannot be empty");
    } else {
      axios
        .post(`http://localhost:5000/postReply/${this.state.id}`, {
          username: "lama.ihab",
          description: reply
        })
        .then(res => {
          if (res.data.msg === "reply was posted successfully") {
            this.setState({
              replies: [
                ...this.state.replies,
                {
                  _id: res.data.data._id,
                  username: res.data.data.username,
                  date: res.data.data.date,
                  description: res.data.data.description,
                  messageID: res.data.data.messageID
                }
              ]
            });
            //console.log(this.state.replies)
          }
          alert(res.data.msg);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  deleteMsg = () => {
    // will get username from signed in later
    axios
      .post(`http://localhost:5000/deleteMessage/${this.state.id}`, {
        username: "lama.ihab"
      })
      .then(res => {
        console.log(this.state.username);
        if (res.data.msg === "Message deleted successfully") {
          this.setState(
            this.state.messages.filter(message => message._id == this.state.id)
          );
        }
        alert(res.data.msg);
      });
  };
  render() {
    //console.log(this.props.message.username+'hiiiii')
    return (
      <div style={itemStyle}>
        {this.state.username}:{this.state.description}
        {this.state.time}
        <button onClick={this.editMsg}>Edit</button>
        <button onClick={this.replyMsg}>Reply</button>
        <button onClick={this.deleteMsg}>Delete</button>
      </div>
    );
  }
}
const itemStyle = {
  backgroundColor: "#E6E6FA"
};
