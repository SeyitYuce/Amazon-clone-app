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
import Payment from './Payment/Payment';
import {loadStripe} from "@stripe/stripe-js"
import { Elements} from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51Lhr9WCYlFb3KzxJqVtWHoHFY3cxGWuD1sNS994SgsuuP1D2STKYcOT6lG9MSjRt6VSU0LU35oN0r7V0ia695V8E00ISX7hqQE")

 
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
          {/* <Header/> */}
        </header>

        <Routes>
          <Route path="/login" element={<>
            <Login/></>}>
          </Route>

            <Route path="/checkout" element={<>
            <Header/>
            <Checkout/> </>}>
            </Route>

            <Route path="/payment" element={<>
            <Header/> 
            <Elements stripe={promise}>          
              <Payment/> 
            </Elements></>}></Route>

            <Route path="/" element={<>
            <Header/>
            <Home/> </>}>
            </Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
