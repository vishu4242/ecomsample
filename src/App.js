import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'



function App() {
  return (
    <center>
    <div className="App">
     <h1>Ecomvishu</h1>

     <Router>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        
        
      </Routes>
     </Router>
    </div>
    </center>
  );
}

export default App;
