import React from 'react';
import { Routes, Route} from 'react-router-dom'
import './App.css';

//import Componetns
import { Navbar } from '../Navbar/Navbar'
import { SignIn } from '../Signin/SignIn'
import { Signup } from '../Signup/Signup'
import { Home } from '../Home/Home'
import {PrivateRoute} from '../PrivateRoute/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <SignIn /> */}
      {/* <Signup/> */}
        {/* only Login user are see this */}
        <PrivateRoute path='/' Element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
