import React from 'react'
import axios from 'axios'

export default class MessagesRow extends React.Component{
    state={
        id:'',
        username:'',
        description:'',
        time:''

    }
    editMsg=()=>{

    }
    replyMsg=()=>{

    }
    deleteMsg=()=>{

    }
    render(){
        return(
            <div style ={itemStyle}>
                <h1>{this.state.username}</h1>:{this.state.description}
                <br/>
                <h1>{this.state.time}</h1>
                <br/>
                <button title='edit' onClick={this.editMsg} />
                <button title='reply' onClick = {this.replyMsg} />
                <button title = 'delete' onClick = {this.deleteMsg} />

            </div>

        )
    }
}
const itemStyle = {
    backgroundColor:'#f4f4f4'

}