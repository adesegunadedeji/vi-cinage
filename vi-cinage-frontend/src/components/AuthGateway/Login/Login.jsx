import React ,{Component} from 'react'
import {Form,FormGroup, Input,Button} from 'reactstrap'

class Login extends Component{
    constructor(){
        super();
        this.state ={
            username: null,
            password: null
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();

        console.log("User Logged in Form Succesfully")
        this.props.handleLogin(this.state)
    }

    render(){
        return(
                <div className="registerandLoginForm">
                <Form onSubmit={this.handleSubmit}>  
                <FormGroup>
                <h6> Login</h6>
                    <Input type = "text" name ="username" placeholder="username" onChange={this.handleChange} />
                   <Input type = "password"  placeholder="Password" name ="password"onChange={this.handleChange}/>
                   </FormGroup> 
                    <Button type = "submit" value ="Register">Login</Button>
                </Form>
          </div>
        )
    }
}

export default Login