import React, { useEffect } from 'react';
import './App.css';
import "./index.css"
import Header from './Header/Header';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';



function App() {

  const  [{}, dispatch] = useStateValue()

  useEffect(() => {
    

    auth.onAuthStateChanged(authUser => {
      // console.log("The user is >>>",  );

      if(authUser) {
        //the user just or was logged in

        dispatch({
          type: "SET-USER",
          user: authUser
        })
      }
      else {
        //the user is logged out
        dispatch({
          type: "SET-USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">

        <header>
          <Header/>
        </header>

        <Routes>
          <Route path="/login" element={<Login/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
