import React from 'react'

export default class LogInForm extends React.Component{
    state = {
        userName:'',
        password:''
    }

        
        onChange=(e)=>this.setState({[e.target.name]:e.target.value}); //setting state for each input
    
    logIn = (e)=>{
        e.preventDefault()
        // calls backend here

    }
    render(){
        return(
        <form onSumbit = {this.logIn}>  
            <label>
                User Name :
                <input name ="userName" type="text" placeholder='username' value={this.state.userName} onChange = {this.onChange}/>
                
            </label>
            <label>
                Password:
                <input name = "password"type='text' placeholder='password' value={this.state.password} onChange={this.onChange} />
            </label>
            <input type ='submit' value='login' />

        </form>

         ) }
        
}
