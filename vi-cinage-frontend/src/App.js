import React,{Component} from 'react';
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
       {/* {
        this.state.loggedIn?
        <Realestatecontainer/>:
        <AuthGateway handleRegister={this.handleRegister} handleLogin={this.handleLogin}/>
      } */}

    
    </div>
  );
}
//Use Exact to match the router exactly. The most specific path is at the top.
}

export default App;
