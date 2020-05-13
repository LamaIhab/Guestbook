import React from 'react'
import {Link,BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'


export default class Header extends React.Component{
    state = {
    
    }
   
    render(){
        
                  
    
   
        return(
            <header style = {headerStyle}>
           
           
            <Link style={LinkStyle} to='/login'onClick={this.props.logIn}>Login</Link>|{" "}
            <Link style={LinkStyle} to='/signUp' onClick={this.props.signUp}>SignUp</Link>|{" "}
            <Link style={LinkStyle} onClick={this.props.home}>Home</Link>
            
            </header> 
           
            
           
           
            
            
                
            
        )

        
    }
}

const headerStyle={
    background:'#000000',
    color:'#e5e8e8',
    textAlign:'center',
    padding:'10px',
    height:45
  }
  const LinkStyle={
    color:'#e5e8e8',
  
}
