import express from "express";
import cors from "cors";
import ordersRouter from "./routes/orders.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); // Add CORS middleware

// Routes
app.use("/api/orders", ordersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
