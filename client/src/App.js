import React from "react";
import {Link,BrowserRouter as Router,Route,Redirect} from 'react-router-dom';

import Header from './Header'
import MessagesPage from './MessagesPage'
import LogInPage from './LogInPage'
import SignUpPage from './SignUpPage'
class App extends React.Component {
  state={
    redirect:null
  }
  gotoMsgs=()=>{
    this.setState({redirect:'/messages'})
  }
  logIn=()=>{
    this.setState({redirect:'/login'})

}
signUp=()=>{
  this.setState({redirect:'/signUp'})

}
home=()=>{
  this.setState({redirect:null})

}



 
  render() {
    console.log(this.state.redirect)
    
    if(this.state.redirect){
      return (
        <Router>
          <Header logIn = {this.logIn} signUp = {this.signUp} home={this.home}/>
      <Route exact path = "/messages" component = {MessagesPage}/> 
      <Route exact path = "/login" component = {LogInPage}/> 
      <Route exact path = "/signUp" component = {SignUpPage}/> 
    
      <Redirect to={this.state.redirect}/>
      </Router>
      )
    }
   
   return(
    <Router>
      
       
      
      <div >
  
        <Header logIn = {this.logIn} signUp = {this.signUp} home={this.home}/>
        <p style = {message}>Welcome to Guest Book</p>
        <Link style={getStarted} onClick={this.gotoMsgs}>CLICK HERE & EXPLORE NOW!!</Link>
       
   
        
      </div>
      </Router>
    );
  }
}
const message = {
  textAlign:'center',
  fontFamily:'Ariel',
  fontStyle:'Italic',
  color:'#87CEFA',

  padding:'135px',
  flex:100,
  flexDirection:'row',
  fontSize:64,
  fontWeight:'bold'
}
const getStarted = {
  textAlign:'center',
  fontFamily:'Ariel',
  fontStyle:'Italic',
  color:'#87CEEB',

  padding:'470px',

  
  fontSize:30,
  fontWeight:'bold'

}


export default App;
