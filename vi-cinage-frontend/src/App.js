import React,{Component} from 'react';
import Realestatecontainer from './components/RealestateContainer'
import AuthGateway from './components/AuthGateway/AuthGateway';


class App extends Component {
  constructor(){
    super();
    this.state={
      loggedIn:false,
      username:null
    }
  }

  render(){
  return (
    <div className="App">
      {
        this.state.loggedIn ?
        <Realestatecontainer/>:
        <AuthGateway/>
      }
    </div>
  );
}
}

export default App;
