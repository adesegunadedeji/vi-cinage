import React,{Component} from 'react';
import Realestatecontainer from './components/RealestateContainer'
import AuthGateway from './components/AuthGateway/AuthGateway';


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
      console.log("ParsedResponse")
      console.log(parsedResponse)
      console.log("201 code", parsedResponse.status.code)

      if(parsedResponse.status.code === 201){
        console.log("sucessful Registration")
        this.setState({
          loggedIn: true,
          username:parsedResponse.data.username
        })
      }
    
  }
  render(){
  return (
    <div className="App">
      {
        this.state.loggedIn?
        <Realestatecontainer/>:
        <AuthGateway handleRegister={this.handleRegister}/>
      }
    </div>
  );
}
}

export default App;
