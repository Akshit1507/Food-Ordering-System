import React, { useState } from "react";

const Food = ({ foodItem, cart, setCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    const newItem = { ...foodItem, quantity: quantity };
    setCart([...cart, newItem]);
    console.log(`Added ${quantity} ${foodItem.name}(s) to cart`);
  };

  return (
    <div className="foodCard">
      <img src={foodItem.image} alt="Food" className="foodImage" />
      <div className="foodDescription">
        <h3 className="foodTitle">{foodItem.name}</h3>
        <p className="foodPrice">${foodItem.price}</p>
        <p className="foodDetails">{foodItem.description}</p>
        <div className="quantity">
          <button className="itemBtn minusBtn" onClick={handleDecrement}>
            -
          </button>
          <input
            type="text"
            className="quantityInput"
            value={quantity}
            readOnly
          />
          <button className="itemBtn plusBtn" onClick={handleIncrement}>
            +
          </button>
        </div>
        <button className="addToCartBtn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Food;
