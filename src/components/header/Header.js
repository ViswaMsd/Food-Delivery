import React from "react";
import "./Header.css";
import HCB from "./HeaderCartButton";

function Header() {
  return (
    <div className="header">
      <h3>React Meals</h3>
      <HCB></HCB>
    </div>
  );
}

export default Header;
