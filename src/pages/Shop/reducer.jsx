//aplication level coding
const initialState = {
  cart: [],
  isLoggedIn: false,
  user: "",
  logout: false,
};

//total amount that cart contain
export const getCartTotal = (cart) => {
  return cart?.reduce((amount, item) => (amount += item.price), 0);
};

export default function reducer(state = initialState, action) {
  let newCart;
  let index;

  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action.payload);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      index = state.cart.findIndex(
        (CartItem) => CartItem.id === action.payload.id
      );
      newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove Product(id:${action.id}) as its not in the cart`
        );
      }
    case "USER_LOG_IN":
      console.log(action);
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case "USER_LOG_OUT":
      return {
        ...state,
        logout: true,
        isLoggedIn: false,
        user: "",
      };
    default:
      return state;
  }
}
