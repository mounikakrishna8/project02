// import React from "react";
import "./Product.css";
export default function Products({ title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map(() => {
              <p>⭐</p>;
            })}
        </div>
      </div>
      <img src={image} alt="product-image" />
      <button>Add to Cart</button>
    </div>
  );
}
