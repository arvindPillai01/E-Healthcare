import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/Cards/card';
import CartPage from './components/Cart/cartPage';
import AdminPanel from './components/AdminPanel/adminPanel';




function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Card />} />
          <Route path='/Admin' element={<AdminPanel />} />
          <Route path='/Cart' element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
