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
      const user = this.state.signedin
        ? this.state.signedin
        : this.state.signedup;
     
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
    if(!(this.state.signedin)&& (!this.state.signedup)){ // alerting if not signed in
      alert('please sign in/ sign up to reply to messages')
      return
    }
    const reply = prompt("please enter the reply:"); // will get username from signed in later

    
     if (reply === "" || reply === null) {
      alert("Reply cannot be empty");
    } else {
      const user = this.state.signedin
        ? this.state.signedin
        : this.state.signedup;
     
 
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
          @
            {this.state.username}:<br/>{this.state.description}<br/>
           <p style={dateStyle}>{this.state.time}</p>
            <br />
            <button onClick={this.replyMsg}>Reply</button>
            <hr
              style={{
                height: 0.7,
                color: "FF4500",
                backgroundColor: "#E6E6FA"
              }}
            />
            
              Replies:({this.state.replies.length})
              <hr
              style={{
                height: 0.7,
                color: "#DDA0DD",
                backgroundColor: "##DDA0DD"
              }}
            />
              {this.state.replies.map(reply => (
                <ReplyRow reply={reply} />
              ))}
           
        </div>
      );
    } else
      return (
        <div style={itemStyle}>
         @
            {this.state.username}:<br/>{this.state.description}
            <br />
           <p style={dateStyle}>{this.state.time}</p>
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
            
              Replies:({this.state.replies.length})
            
              {this.state.replies.map(reply => (
                <ReplyRow reply={reply} />
              ))}
              <hr
              style={{
                height: 0.7,
                color: "FF4500",
                backgroundColor: "#E6E6FA"
              }}
            />
         
        </div>
      );
  }
}
const itemStyle = {
  backgroundColor: "#D3D3D3"
};
const dateStyle={
  fontSize:15,
 
  fontFamily:'Ariel',
}
