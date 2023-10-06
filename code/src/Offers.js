import React, { useState, useEffect } from 'react';
import './Offers.css';
function Offers() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
       
        const firstFourItems = data.slice(0, 4);

        
        const discountedItems = firstFourItems.map((item) => ({
          ...item,
          price: item.price * 0.5, 
        }));

        
        setItems(discountedItems);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="content">
      <h2>Special Offers</h2>
      <div className="offers-list">
        {items.map((item) => (
          <div key={item.id} className="offer-card">
            <div className="offer-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="offer-details">
              <h3 className="offer-title">{item.title}</h3>
              <p className="offer-price">
                <span className="original-price">${item.price.toFixed(2)}</span>
                <span className="discounted-price">
                  ${((item.price * 2) / 3).toFixed(2)} (50% off)
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;