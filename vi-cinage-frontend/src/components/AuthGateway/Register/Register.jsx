import React, {Component} from 'react'

class Register extends Component{
    constructor(){
        super()
        this.State ={
            username: null,
            password: null
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
         })
        console.log(this.state)
    }
   
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Submitted Form")
        //
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>  
                    Username:<input type = "text" name ="username" onChange={this.handleChange}/>
                    Password:<input type = "password" name ="password"onChange={this.handleChange}/>
                    <input type = "submit" value ="Register"/>
                </form>
            </div>
        )
    }

}
export default Register