import React,{Component} from 'react';
import Register from './Register/Register'
import Login from './Login/Login';

class AuthGateway extends Component {
        constructor(){
        super();
}
   render(){
       return(
           <div>
               <h1>Register/Login</h1>
               <Register handleRegister={this.props.handleRegister}/>
               <Login handleLogin={this.props.handleLogin}/>
           </div>
       )
   }
}
export default AuthGateway