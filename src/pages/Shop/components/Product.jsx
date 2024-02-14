// import React from "react";
// import { useStateValue } from "../../../stateProvider";
import "./Product.css";
import { useDispatch } from "react-redux";

export default function Product({ id, image, title, price, rating }) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: id,
        image: image,
        title: title,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <img src={image} alt="product-image" />
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

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
