import React, {Component} from 'react';
import {Form,FormGroup, Input,Button} from 'reactstrap'

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
        //Grandchild Props passer
        this.props.handleRegister(this.state)
    }
    render(){
        return(
          <div className="registerandLoginForm">
                <Form onSubmit={this.handleSubmit}> 
                <FormGroup>
                <h6> Register</h6>
                    <Input type = "text" name ="username" placeholder="username" onChange={this.handleChange} />
                   <Input type = "password"  placeholder="Password" name ="password"onChange={this.handleChange}/>
                   </FormGroup> 
                    <Button type = "submit" value ="Register">Register</Button>
                </Form>
          </div>
        )
    }

}
export default Register