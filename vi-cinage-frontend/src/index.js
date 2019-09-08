import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom'; //Import Router at th highest Level in App.
//Provider and Consumer
ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
    //A higher Order Component has Open/Closing Tag Read it in React.
  );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
