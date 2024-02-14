import React from 'react';
import './CheckoutProduct.css';
import Shop from '../Shop.jsx';
import { useDispatch } from 'react-redux';
export default function CheckoutProduct({ id, image, title, price, rating }) {
  const dispatch = useDispatch();
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        id: id,
      },
    });
  };
  // const productData = Shop();
  return (
    <div className="checkout-product">
      <img src={image} alt="" className="checkoutProduct-image" />

      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket}> Remove from basket</button>
      </div>
    </div>
  );
}
