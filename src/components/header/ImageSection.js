import React from "react";
import "./ImageSection.css";
import Card from "../ui/Card";

function ImageSection() {
  return (
    <div className="subHeader">
      <div className="img"></div>
      <Card className="info">
        <h4>Delicious Food,Delivered To You</h4>
        <p>
          Choose your favorite meals from our board selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cocked with high-quality ingredients,just-in-time
          and of course by Experienced chefs!
        </p>
      </Card>
    </div>
  );
}

export default ImageSection;
