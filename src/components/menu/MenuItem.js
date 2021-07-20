import React, { useContext, useRef } from "react";
import "./MenuItem.css";
import Button from "../ui/Button";
import Input from "../ui/Input";
import CartContext from "../../contexts/CartContext";

function MenuItem(props) {
  const ctx = useContext(CartContext);
  const menuItemRef = useRef();

  const price = `$${props.meal.price}`;
  return (
    <div className="menu__item__hr">
      <div className="menu__item">
        <div className="menu__item__left">
          <span className="menu__item__name">{props.meal.name}</span>
          <span className="menu__item__description">
            {props.meal.description}
          </span>
          <span className="menu__item__price">{price}</span>
        </div>
        <form
          className="menu__item__right"
          onSubmit={(e) => {
            e.preventDefault();
            ctx.addItem({ ...props.meal, count:+menuItemRef.current.value});
          }}
        >
          <Input ref={menuItemRef}
            input={{
              id: `{props.key}`,
              type: "number",
              min: "1",
              max: "5",
              defaultValue: "1",
            }}
            label="X"
          />
          <Button type="submit" className="btn--primary">
            {" "}
            + ADD{" "}
          </Button>
        </form>
      </div>
      <hr></hr>
    </div>
  );
}

export default MenuItem;
