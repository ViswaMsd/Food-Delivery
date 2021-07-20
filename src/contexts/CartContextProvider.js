import React, { useState } from "react";
import CartContext from "./CartContext";

function CartContextProvider(props) {
  const [cartIsShownState, setCartIsShownState] = useState(false);
  const [cartItemsState, setCartItemsState] = useState([]);

  const context = {
    cartItems: cartItemsState,
    cartIsShown: cartIsShownState,
    cartHandler: (val) => {
      console.log("cartHandler called...");
      setCartIsShownState(val);
      console.log(val);
    },
    addItem: (itemObj) => {
      console.log("addItem called...");
      const i = context.cartItems.findIndex((item) => item.id === itemObj.id);

      if (i === -1) {
        setCartItemsState([...cartItemsState, itemObj]);
      } else {
        context.cartItems[i].count += itemObj.count;
        setCartItemsState([...cartItemsState]);
      }
    },
    increment: (id) => {
      const i = context.cartItems.findIndex((item) => item.id === id);
      context.cartItems[i].count += 1;
      setCartItemsState([...cartItemsState]);
    },
    removeItem: (id) => {
      console.log("removeItem called...");
      const i = context.cartItems.findIndex((item) => item.id === id);
      console.log("index:", i);
      if (context.cartItems.length === 0) {
        setCartItemsState([]);
      } else if (context.cartItems[i].count === 1) {
        context.cartItems.splice(i, 1);
        setCartItemsState([...context.cartItems]);
      } else {
        context.cartItems[i].count--;
        setCartItemsState([...cartItemsState]);
      }
    },
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
