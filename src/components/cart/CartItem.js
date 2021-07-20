import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";

function CartItem(props) {
  const ctx = useContext(CartContext);

  const dec = (e) => {
    // e.preventDefault();
    // console.log(e);
    console.log("dec called...");
    // console.log(ctx.cartIsShown);
    ctx.removeItem(props.cartItem.id);
    console.log(ctx.cartItems);
  };

  const inc = () => {
    console.log("inc called...");
    ctx.increment(props.cartItem.id);
  };
  return (
    <div className="cartItem">
      <div className="cartitem__left">
        <span>{props.cartItem.name}</span>
        <span>{props.cartItem.price}</span>
        <div>{`X ${props.cartItem.count}`}</div>
      </div>

      <form className="cartItem__right">
        <button type="button" onClick={inc}>
          +
        </button>
        <button type="button" onClick={dec}>
          -
        </button>
      </form>
      <hr />
    </div>
  );
}

export default CartItem;
