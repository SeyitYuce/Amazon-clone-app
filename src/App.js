import React from 'react';
import './App.css';
import "./index.css"
import Header from './Header/Header';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';



function App() {
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
