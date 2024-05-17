import connection from "../db/dbConfig.js";

// Function to create a new order
const createOrder = (req, res) => {
  // Extract cart data from the request body
  const cart = req.body;

  // Extract order details from the cart
  const orderDetails = cart
    .map((item) => `${item.quantity} ${item.name}(s)`)
    .join(", ");

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Construct the SQL query to insert the order data into the database
  const sql = "INSERT INTO orders (order_details, total_price) VALUES (?, ?)";

  // Execute the SQL query
  connection.query(sql, [orderDetails, totalPrice], (err, result) => {
    if (err) {
      console.error("Error creating order:", err);
      return res.status(500).json({ error: "Error creating order" });
    }

    console.log("Order created successfully:", result);

    // Respond with a success message
    res.status(201).json({
      message: "Order created successfully",
      orderId: result.insertId,
    });
  });
};

export { createOrder };
