import React from 'react';
import './App.css';
import Home from './Home';
import Products from './Products';
import Offers from './Offers';
import Search from './Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/search" element={<Search />} /> 
          <Route path="/products" element={<Products />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;