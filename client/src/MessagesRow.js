import React from 'react'
import axios from 'axios'

export default class MessagesRow extends React.Component{
    state = {
        username:this.props.message.username,
        description:this.props.message.description,
        time:this.props.message.time,
        id:this.props.message._id,
        //signedinCorrect:false to hide buttons will handle later
    }
   
    editMsg=()=>{
        
        const edit = prompt('edit your message:',this.state.description) // will get username from signed in later
        axios.put(`http://localhost:5000/editMessage/${this.state.id}`,{username:'lama.ihab',description:edit}).then(res=>{
            if(res.data.msg==='Message updated successfully')
            this.setState({description:edit})
            alert(res.data.msg)
            
        }).catch(error=>{console.log(error)})

      

    }
    replyMsg=()=>{
        prompt('please enter the reply')

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
                <button onClick = {this.deleteMsg} >Delete</button>
                

            </div>

        )
    }
}
const itemStyle = {
    backgroundColor:'#E6E6FA'

}