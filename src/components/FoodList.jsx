import React from "react";
import Food from "./Food";

const FoodList = ({ foodItems, cart, setCart }) => {
  return (
    <div>
      <center>
        <h2>Available Items !</h2>
      </center>
      <div className="menu">
        {foodItems.map((item) => {
          return (
            <Food
              key={item.name}
              foodItem={item}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodList;
