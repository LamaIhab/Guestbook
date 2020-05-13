import React from "react";
import axios from "axios";
import ReplyRow from "./ReplyRow";

export default class MessagesRow extends React.Component {
  state = {
    username: this.props.message.username,
    description: this.props.message.description,
    time: this.props.message.time,
    id: this.props.message._id,
    replies: [], // render those under message handle later
    signedin: this.props.username,
    signedup: this.props.usernameSU
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/getReplies/${this.state.id}`).then(res => {
      this.setState({ replies: res.data.data });
    });
  }

  editMsg = () => {
    const edit = prompt("edit your message:", this.state.description); // will get username from signed in later
    if (edit === "" || edit === null) {
      alert("Message cannot be empty");
    } else {
      const user = this.props.username
        ? this.props.username
        : this.props.usernameSU;
      console.log(user + "hhhhh");
      axios
        .put(`http://localhost:5000/editMessage/${this.state.id}`, {
          username: user,
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
      const user = this.props.username
        ? this.props.username
        : this.props.usernameSU;
      console.log(user + "hhhhh");
      axios
        .post(`http://localhost:5000/postReply/${this.state.id}`, {
          username: user,
          description: reply
        })
        .then(res => {
          if (res.data.msg === "reply was posted successfully") {
            this.setState({
              replies: [...this.state.replies, res.data.data]
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

  render() {
    if (
      (!this.state.signedin && !this.props.signedup) ||
      (this.state.signedin !== this.state.username &&
        this.state.signedup !== this.state.username)
    ) {
      // checking if not signed in or signed up as this message's user remove buttons
      return (
        <div style={itemStyle}>
          <li>
            {this.state.username}:{this.state.description}
            {this.state.time}
            <br />
            <button onClick={this.replyMsg}>Reply</button>
            <hr
              style={{
                height: 0.7,
                color: "FF4500",
                backgroundColor: "#E6E6FA"
              }}
            />
            <li>
              Replies:
              {this.state.replies.map(reply => (
                <ReplyRow reply={reply} />
              ))}
            </li>
          </li>
        </div>
      );
    } else
      return (
        <div style={itemStyle}>
          <li>
            {this.state.username}:{this.state.description}
            {this.state.time}
            <br />
            <button onClick={this.editMsg}>Edit</button>
            <button onClick={this.replyMsg}>Reply</button>
            <button onClick={this.props.deleteMsg.bind(this, this.state.id)}>
              Delete
            </button>
            <hr
              style={{
                height: 0.7,
                color: "FF4500",
                backgroundColor: "#E6E6FA"
              }}
            />
            <li>
              Replies:
              {this.state.replies.map(reply => (
                <ReplyRow reply={reply} />
              ))}
            </li>
          </li>
        </div>
      );
  }
}
const itemStyle = {
  backgroundColor: "#E6E6FA"
};
