import React, {Component} from 'react';
import Footer from './components/footer/footer';
import NavbarComponent from './components/navbar/navbar';
import styles from './App.module.css';
import Home from './components/Home/home';
class App extends Component {


    render(){
        return (
            // <div className= {styles.container}>
            <div>
                <div className={styles.container}></div>
                <NavbarComponent/>
                <Home/>
               <Footer/>
               </div>
        )
    }
}

export default App;