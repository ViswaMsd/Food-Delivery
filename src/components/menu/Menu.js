import React, { useEffect, useState } from "react";
import "./Menu.css";
import Card from "../ui/Card";
import MenuItem from "./MenuItem";

function Menu() {
  const [mealsList, setMealsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    fetch(
      "https://food-delivery-api-a790f-default-rtdb.firebaseio.com/meals.json"
    )
      .then((res) => {
        console.log(res);
        if (!res.ok)
          throw new Error(`Something Went Wrong...status:${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        let meals = [];
        // setMealsList([...data]);
        for (const mealObj of Object.values(data)) {
          meals.push(mealObj);
        }
        setMealsList(meals);
      })
      .catch((err) => {
        setHasError(err.message);
        console.log(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {};
  }, []);

  if (isLoading) return <p className="status">Loading..</p>;
  if (hasError) return <p className="status">{hasError}</p>;

  return (
    <Card className="menu">
      {mealsList.map((meal) => {
        return <MenuItem key={meal.id} meal={meal} />;
      })}
    </Card>
  );
}

export default Menu;
