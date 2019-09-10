import React,{Component} from 'react';
import Realestatecontainer from './components/RealestateContainer'
import AuthGateway from './components/AuthGateway/AuthGateway';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import NewEstates from './components/NewEstates/NewEstates';
import Landing from './components/Landing/Landing';
import RealEstateContainer from './components/RealestateContainer'
//Route allows us to define routes. 

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
    <div className="App">
      <Navbar/>
      <main>
        <Switch>
       < Route path ='/about' component ={About}/>
       < Route path ='/contact' component ={Contact}/>
       < Route path ='/newEstate' component ={NewEstates}/>
       < Route path ='/home' component ={Home}/>
        < Route path ='/Listings' component ={RealEstateContainer}/> 
       < Route path ='/' component ={Landing}/>
        <Redirect to='/'/>
       </Switch>
       </main>
       {
        this.state.loggedIn?
        <Realestatecontainer/>:
        <AuthGateway handleRegister={this.handleRegister} handleLogin={this.handleLogin}/>
      }
      <div>
      <h2 align="center">
         <div className ="text">
           See how vicinage can help
         </div>
       </h2>
       </div>

    <Footer/>
    </div>
  );
}
//Use Exact to match the router exactly. The most specific path is at the top.
}

export default App;
