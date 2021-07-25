import React, { useContext } from "react";

import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import ImageSection from "./components/header/ImageSection";
import Menu from "./components/menu/Menu";
import CartContext from "./contexts/CartContext";

function App() {
  console.log("App component loaded..!");
  const ctx = useContext(CartContext);

  return (
    <>
      {ctx.cartIsShown ? <Cart /> : <div></div>}
      <div>
        <Header></Header>
        <ImageSection></ImageSection>
        <Menu></Menu>
      </div>
    </>
  );
}

export default App;
