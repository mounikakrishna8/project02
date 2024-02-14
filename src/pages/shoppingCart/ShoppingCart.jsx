import React from "react";
import Header from "../../components/Header/Header.jsx";
import CheckOutProduct from "../Shop/components/CheckoutProduct.jsx";
import CartTotal from "../Shop/components/CartTotal.jsx";
import "./ShoppingCart.css";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout-left">
          <h2 className="checkout-title"> Your Shopping Cart</h2>
          {cart.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        <div className="checkout-right">
          <CartTotal />
        </div>
      </div>
    </>
  );
}
