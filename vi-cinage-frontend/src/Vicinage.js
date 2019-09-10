import React,{Component} from 'react';
import Realestatecontainer from './components/RealestateContainer'
import AuthGateway from './components/AuthGateway/AuthGateway';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
//Route allows us to define routes. 

class Vicinage extends Component {
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
    <div className="App">
<Navbar/>
       {
        this.state.loggedIn?
        <Realestatecontainer/>:
        <AuthGateway handleRegister={this.handleRegister} handleLogin={this.handleLogin}/>
      }
      <Footer/>
    </div>
  );
}
//Use Exact to match the router exactly. The most specific path is at the top.
}

export default Vicinage;
