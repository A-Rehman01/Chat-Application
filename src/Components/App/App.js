import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';

//import Componetns
import { Navbar } from '../Navbar/Navbar'
import { SignIn } from '../Signin/SignIn'
import { Signup } from '../Signup/Signup'
import { Home } from '../Home/Home'
import { IsloggedinUser } from '../../Services/IsloggedinUser';
import { useDispatch, useSelector } from 'react-redux'
import { SignInInitialData, signinData } from '../../Reducer/signinSlice'

//PrivateRoutes
import { PrivateRoute } from '../../PrivatesRoutes/PrivateRoute/PrivateRoute'
import { SigininPrivateRoute } from '../../PrivatesRoutes/SigninPrivateRoute/SigninPrivateRoute'
import { SignupPrivateRoute } from '../../PrivatesRoutes/SignupPrivateRoute/SignupPrivateRoute'



function App() {
  const dispatch = useDispatch();
  const finaldata=useSelector(signinData)

  useEffect(() => {
    async function CheckLocalStorage() {
      const data = await IsloggedinUser();
      dispatch(SignInInitialData(data));
    }
    CheckLocalStorage();
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* only Login user are see this */}
        <PrivateRoute path='/' Element={<Home />} />
        <SigininPrivateRoute path='/signin' Element={<SignIn />} />
        <SignupPrivateRoute path='/signup' Element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
