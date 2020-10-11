import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { firebaseConfig } from './Services/FirebaseConfig'
import { Provider } from 'react-redux';
import { ChatStore } from './Redux/ChatStore'

// Initialize Firebase
firebaseConfig()

ReactDOM.render(
  <Provider store={ChatStore} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
