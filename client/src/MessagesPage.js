import React from "react";
import AllMessages from "./AllMessages";
import Header from "./Header";

export default class MessagesPage extends React.Component {
  render() {
    return (
      <div>
        <AllMessages
          username={this.props.username}
          usernameSU={this.props.usernameSU}
        />
      </div>
    );
  }
}
