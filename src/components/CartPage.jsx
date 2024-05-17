import "./cart.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CartPage = ({ cart }) => {
  const navigateTo = useNavigate();

  const handlePayment = () => {
    // Construct the order data
    if (!Array.isArray(cart)) {
      console.error("Invalid cart data:", cart);
      return;
    }
    // Send a POST request to the backend API to save the order
    axios
      .post("http://localhost:5000/api/orders", cart)
      .then((response) => {
        console.log("Order placed successfully:", response.data);
        // Redirect to payment success page
        navigateTo("/payment-success");
      })
      .catch((error) => {
        console.error("Error processing payment:", error);
      });
  };
  if (!cart || cart.length === 0) {
    return <h2>Add Items To Cart</h2>;
  }
  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cartItem">
          <div>
            <img src={item.image} alt={item.name} />
          </div>
          <div>
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>
          </div>
        </div>
      ))}
      <div className="totalPrice">
        <p>Total Price: ${totalPrice}</p>
        <button onClick={handlePayment} className="payNowBtn">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CartPage;
