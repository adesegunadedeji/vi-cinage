import React,{Component} from 'react';
import Register from './Register/Register'
import Login from './Login/Login';

class AuthGateway extends Component {
   render(){
       return(
           <div>
               <Register handleRegister={this.props.handleRegister}/>
               <Login handleLogin={this.props.handleLogin}/>
           </div>
       )
   }
}
export default AuthGateway