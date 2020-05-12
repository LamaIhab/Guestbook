import React from "react";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import AllMessages from "./AllMessages";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <LogInForm />
        <SignUpForm />
        <AllMessages />
      </div>
    );
  }
}

export default App;
