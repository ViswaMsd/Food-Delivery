import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import Card from "../ui/Card";
import Overlay from "../ui/Overlay";
import "./Cart.css";
import CartItem from "./CartItem";

function Cart() {
  const ctx = useContext(CartContext);
  console.log("cart loaded..!");
  return (
    <Overlay
      className="cart-overlay"
      // onClick={() => { ctx.cartHandler(false); }}
    >
      <Card className="cart">
        {ctx.cartItems.length === 0
          ? ""
          : ctx.cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
            ))}
        {ctx.cartItems.length === 0 ? (
          <span>No items added to Cart</span>
        ) : (
          <span>
            {ctx.cartItems
              .reduce((acc, item) => acc + item.price * item.count, 0)
              .toFixed(2)}
          </span>
        )}
        <div className="control">
          <button
            type="button"
            onClick={() => {
              ctx.cartHandler(false);
            }}
          >
            Cancle
          </button>
          <button type="button">Order</button>
        </div>
      </Card>
    </Overlay>
  );
}

export default Cart;
