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
        let newDate = ''
        newDate+= arr[11]+arr[12]+arr[13]+arr[14]+arr[15]+' '+arr[8]+arr[9]+'/'+arr[5]+arr[6]+'/'+arr[0]+arr[1]+arr[2]+arr[3]                           // day month year hour minute
        return newDate
       
    }
    render(){
        return(
            
            <div style={{color:'#000000'}}>
           
            <ul>
         
            <p style={nameStyle}> @{this.state.username}:</p><p style={msgStyle}>{this.state.description}</p>
             <p style={dateStyle}>{this.getDate()}</p>
        <hr style={lineStyle} />
      
        </ul>

            </div>
            
        )
    }
}
const dateStyle={
    fontSize:15,
   
    fontFamily:'Ariel',
    color:'	#191970	',
  }
  const lineStyle = {
    height: 0.7,
    color: "FF4500",
    backgroundColor: "#E6E6FA"
  }
 
  const nameStyle = {
    
    fontFamily:'Ariel',
    fontStyle:'Italic',
    color:'#BA55D3',
  
  
   
    fontSize:17,
    fontWeight:'bold'
  }

  const msgStyle = {
    
    fontFamily:'Ariel',
  
    color:'#',
  
  
   
    fontSize:18,
   
  }