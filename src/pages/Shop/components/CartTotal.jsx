import { getCartTotal } from "../reducer.jsx";
import { useSelector } from "react-redux";
import "./CartTotal.css";
export default function CartTotal() {
  //Access the cart items from the reducx store
  const cart = useSelector((state) => state.cart); // need to check my stor setup

  //Calculate the total using the getCartTotal function
  const total = getCartTotal(cart);
  // checkout with stipe
  const checkout = async () => {
    await fetch("http://localhost:4090/checkout", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };
  return (
    <div className="cart-total">
      <h2>Total</h2>
      <p>
        <span>Total Items: </span> {cart.length}
      </p>
      <p>
        <span>Total Amount: </span> {total.toFixed(2)}
      </p>
      <button className="checkout-button" onClick={checkout}>
        Proceed to checkout
      </button>
    </div>
  );
}
