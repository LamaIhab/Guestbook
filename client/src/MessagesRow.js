import React from 'react'
import axios from 'axios'

export default class MessagesRow extends React.Component{
    state = {
        username:this.props.message.username,
        description:this.props.message.description,
        time:this.props.message.time,
        id:this.props.message._id
    }
    editMsg=()=>{

    }
    replyMsg=()=>{

    }
    deleteMsg=()=>{

    }
    render(){
        console.log(this.props.message.username+'hiiiii')
        return(
            <div style ={itemStyle}>
           
                {this.state.username}:{this.state.description}
                
                {this.state.time}
                
                <button  onClick={this.editMsg}>Edit</button>
                <button  onClick = {this.replyMsg}>Reply</button>
                <button  onClick = {this.deleteMsg} >Delete</button>

            </div>

        )
    }
}
const itemStyle = {
    backgroundColor:'#E6E6FA'

}