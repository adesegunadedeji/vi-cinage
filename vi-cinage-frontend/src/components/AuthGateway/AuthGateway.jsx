import React,{Component} from 'react';
import Register from './Register/Register'

class AuthGateway extends Component {
        constructor(){
        super();
}
   render(){
       return(
           <div>
               <h1>Register as a New User</h1>
               <Register/>
           </div>
       )
   }
}
export default AuthGateway