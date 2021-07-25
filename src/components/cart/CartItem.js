import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import "./CartItem.css";

function CartItem(props) {
  const ctx = useContext(CartContext);

  const dec = (e) => {
    console.log("dec called...");
    ctx.removeItem(props.cartItem.id);
    console.log(ctx.cartItems);
  };

  const inc = () => {
    console.log("inc called...");
    ctx.increment(props.cartItem.id);
  };
  return (
    <>
      <div className="cartItem">
        <div className="cartItem__left">
          <span>
            {props.cartItem.name}
            {"        "}
          </span>
          <span>${props.cartItem.price}</span>
          <div>{`X ${props.cartItem.count}`}</div>
        </div>

        <div className="cartItem__right">
          <button className="btn--cart" type="button" onClick={inc}>
            +
          </button>
          <button className="btn--cart" type="button" onClick={dec}>
            -
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default CartItem;
