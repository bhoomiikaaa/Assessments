import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <h1>Online Shopping</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/search" className="search-link">
              Search
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hero">
        <h2>Welcome to Our Online Store</h2>
        <p>Discover a wide range of products and exclusive offers.</p>
        <Link to="/products" className="btn btn-primary">
          Explore Products
        </Link>
      </div>
    </div>
  );
}

export default Home;