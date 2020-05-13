import React from 'react'

export default class ReplyRow extends React.Component{
    state={
        _id:this.props.reply._id,
        username:this.props.reply.username,
        description:this.props.reply.description,
        date:this.props.reply.date,
        messageID:this.props.reply.messageID
    

    }
    getDate=()=>{
        const arr = this.state.date.split('')
        console.log(arr+'hhh')
        return 'll'
    }
    render(){
        return(
            
            <div style={{color:'#000000'}}>
           
            <ul>
         
             @{this.state.username}:<br/>{this.state.description}<br/>
             <p style={dateStyle}>{this.getDate()}</p>
        <hr style={{height: 0.7,color:'FF4500',backgroundColor:'#E6E6FA'}} />
      
        </ul>

            </div>
            
        )
    }
}
const dateStyle={
    fontSize:15,
   
    fontFamily:'Ariel',
  }