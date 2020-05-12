import React from 'react'
import {Link,BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'


export default class Header extends React.Component{
   
    render(){
        
                  
    
   
        return(
            <header style = {headerStyle}>
           
           
            <Link onClick={this.props.logIn}>Login</Link>
            
            </header> 
           
            
           
           
            
            
                
            
        )

        
    }
}

const headerStyle={
    background:'#E6E6FA',
    color:'#e5e8e8',
    textAlign:'center',
    padding:'10px',
    height:50
  }
