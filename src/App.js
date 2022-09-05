import React from 'react';
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



function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
        <Routes>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
