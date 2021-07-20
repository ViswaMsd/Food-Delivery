import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  cartIsShown: false,
  cartHandler: () => {},
  addItem: () => {},
});

export default CartContext;
