import React,{Component} from 'react';
import Realestatecontainer from './components/RealestateContainer'
import AuthGateway from './components/AuthGateway/AuthGateway';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'


class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn:false,
      username:null
    }
  }
    handleRegister= async (formData) =>{
      console.log('Registering')
      console.log(formData)
      const registerResponse = await fetch("http://localhost:9000/user/register",{
        method: "POST",
        body: JSON.stringify(formData),
        credentials: "include",
        headers:{
          "Content-Type": "application/json"
        }
      })
      const parsedResponse =  await registerResponse.json();
      console.log("ParsedResponse from Registration",parsedResponse)
      console.log("201 code", parsedResponse.status.code)
      if(parsedResponse.status.code === 201){
        console.log("sucessful Registration")
        this.setState({
          loggedIn: true,
          username:parsedResponse.data.username
        })
        //Else should send a message to User that Log In is not Valid
      }
    
  }
  handleLogin = async (formData) =>{
    console.log("Logging In", formData)
    const loginResponse = await fetch("http://localhost:9000/user/login",{
      method: "POST",
      body: JSON.stringify(formData),
      credentials: "include",
      headers:{
        "Content-Type": "application/json"
      }
    })

    const parsedResponse = await loginResponse.json();
    console.log("Parsed Response from Login")
    if(parsedResponse.status.code === 200){
      console.log("sucessful Login")
      this.setState({
        loggedIn: true,
        username:parsedResponse.data.username
      })
    }
  };
  
  render(){
  return (
    <Router>
    <div className="App">
  <Navbar/>
      {
        this.state.loggedIn?
        <Realestatecontainer/>:
        <AuthGateway handleRegister={this.handleRegister} handleLogin={this.handleLogin}/>
      }
    </div>
    </Router>
  );
}
}

export default App;
