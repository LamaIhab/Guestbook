import React from 'react'

export default class ReplyRow extends React.Component{
    state={
        _id:this.props.reply._id,
        username:this.props.reply.username,
        description:this.props.reply.description,
        date:this.props.reply.date,
        messageID:this.props.reply.messageID
    

    }
    render(){
        return(
            
            <div style={{color:'#000000'}}>
            Replies:
             {this.state.username}:{this.state.description}
        {this.state.date}
        <hr style={{height: 0.7,color:'FF4500',backgroundColor:'#E6E6FA'}} />

            </div>
            
        )
    }
}