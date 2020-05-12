import React from "react";
import {Link,BrowserRouter as Router,Route,Redirect} from 'react-router-dom';

import Header from './Header'
import MessagesPage from './MessagesPage'
import LogInPage from './LogInPage'
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

 
  render() {
    
    if(this.state.redirect){
      return (
        <Router>
      <Route exact path = "/messages" component = {MessagesPage}/> 
      <Route exact path = "/login" component = {LogInPage}/> 
    
      <Redirect to={this.state.redirect}/>
      </Router>
      )
    }
   
   else return(
    <Router>
      
      <div >
        <Header logIn = {this.logIn}/>
        <p style = {message}>Welcome to Guest Book</p>
        <Link onClick={this.gotoMsgs}>get started and see what our guests are saying</Link>
       
   
        
      </div>
      </Router>
    );
  }
}
const message = {
  textAlign:'center',
  fontFamily:'Ariel',
  fontStyle:'Italic',

  padding:'135px',
  flex:100,
  flexDirection:'row',
  fontSize:64,
  fontWeight:'bold'
}
const getStarted = {
  textAlign:'center',

}
// const container= {
//   backgroundImage: `url(${`https://media-exp1.licdn.com/dms/image/C560BAQFiIh9Q4ja0jA/company-logo_200_200/0?e=1597276800&v=beta&t=E_o59DWkxrK4PsoWgCWMSmRQFUqxWOtijg0YwfpviyQ`})`,
//   backgroundPosition: 'right',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   width: '50vw',
//   height: '15vh'
// }

export default App;
