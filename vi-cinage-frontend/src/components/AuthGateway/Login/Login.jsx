import React ,{Component} from 'react'

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
            <div>
                <form onSubmit={this.handleSubmit}>
                Username: <input type ="text" name="username"onChange={this.handleChange} />
                Password: <input type ="password" name = "password" onChange={this.handleChange}/>
                <input type = "submit" value ="Login"/>
                </form>
            </div>
        )
    }
}

export default Login