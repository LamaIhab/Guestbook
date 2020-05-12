import React from 'react'
import LogInForm from './LogInForm'
import Header from './Header'

export default class LogInPage extends React.Component{
    render(){
        return(
            <div>
           <Header></Header>
            <LogInForm />
            </div>
            
        )
    }
}