import React, { useState, useEffect } from 'react';
import './Products.css';

function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setItems(data));
  });

  return (
    <div>
      <h2 className="section-heading">Our Products</h2>
      <div className="item-list">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.title} />
            <h2 className="item-title">{item.title}</h2>
            <p className="item-price">${item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;