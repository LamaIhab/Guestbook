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
  getDate = () => {
    const arr = this.state.time.split("");
    let newDate = "";
    newDate +=
      arr[11] +
      arr[12] +
      arr[13] +
      arr[14] +
      arr[15] +
      " " +
      arr[8] +
      arr[9] +
      "/" +
      arr[5] +
      arr[6] +
      "/" +
      arr[0] +
      arr[1] +
      arr[2] +
      arr[3]; // day month year hour minute
    return newDate;
  };
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
    if (!this.state.signedin && !this.state.signedup) {
      // alerting if not signed in
      alert("please sign in/ sign up to reply to messages");
      return;
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
          <p style={nameStyle}>@{this.state.username}:</p>
          <p style={msgStyle}>{this.state.description}</p>
          <br />
          <p style={dateStyle}>{this.getDate()}</p>
          <br />
          <button style={btnStyle} onClick={this.replyMsg}>Reply</button>
          <hr
            style={lineStyle
           
            }
          />
          <h1 style={{color:'#483D8B',fontSize:16}}>Replies:({this.state.replies.length})</h1>
        
          {this.state.replies.map(reply => (
            <ReplyRow reply={reply} />
          ))}
        </div>
      );
    } else
      return (
        <div style={itemStyle}>
         <p style={nameStyle}> @{this.state.username}:</p>
         <p style={msgStyle}>{this.state.description}</p>
          <br />
          <p style={dateStyle}>{this.getDate()}</p>
          <br />
          <button style={btnStyle} onClick={this.editMsg}>Edit</button>
          <button style={btnStyle} onClick={this.replyMsg}>Reply</button>
          <button style={btnStyle}  onClick={this.props.deleteMsg.bind(this, this.state.id)}>
            Delete
          </button>
          <hr
            style={lineStyle
              
            }
          />
           <h1 style={{color:'#483D8B',fontSize:16}}>Replies:({this.state.replies.length})</h1>
          {this.state.replies.map(reply => (
            <ReplyRow reply={reply} />
          ))}
      
        </div>
      );
  }
}
const itemStyle = {
  backgroundColor: "#DCDCDC"
};
const dateStyle = {
  fontSize: 15,
  color:'	#191970	',

  fontFamily: "Ariel"
};
const lineStyle = {
  height: 0.7,
  color: "FF4500",
  backgroundColor: "#E6E6FA"
}
const btnStyle={
  background:'#A9A9A9',
  color:'#',
  //:'10px'
  
  }

  const nameStyle = {
    
    fontFamily:'Ariel',
    fontStyle:'Italic',
    color:'#BA55D3',
  
  
   
    fontSize:20,
    fontWeight:'bold'
  }

  const msgStyle = {
    
    fontFamily:'Ariel',
  
    color:'#',
  
  
   
    fontSize:19,
   
  }

