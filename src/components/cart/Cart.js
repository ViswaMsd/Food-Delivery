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
          <div
            style={{
              color: "var(--color-primary)",
              textAlign: "center",
              padding: "1rem 2rem",
              fontWeight: "600",
              fontSize: "2.5rem",
            }}
          >
            No items added to Cart
          </div>
        ) : (
          <div
            style={{
              color: "yellow",
              textAlign: "center",
              padding: "1rem 2rem",
              fontWeight: "600",
              fontSize: "2.5rem",
            }}
          >
            Cart Value : $
            {ctx.cartItems
              .reduce((acc, item) => acc + item.price * item.count, 0)
              .toFixed(2)}
          </div>
        )}
        <div className="control">
          <button
            className="btn--cart"
            type="button"
            onClick={() => {
              ctx.cartHandler(false);
            }}
          >
            Back
          </button>

          <button className="btn--cart" type="button">
            Order
          </button>
        </div>
      </Card>
    </Overlay>
  );
}

export default Cart;
