import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';

//import Componetns
import { Navbar } from '../Navbar/Navbar'
import { SignIn } from '../Signin/SignIn'
import { Signup } from '../Signup/Signup'
import {Home} from '../Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      {/* <SignIn /> */}
      {/* <Signup/> */}
      <Route path='/' element={<Home/>}/>
      <Route path='/signin'  element={<SignIn/>} />
      <Route path='/signup'  element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
