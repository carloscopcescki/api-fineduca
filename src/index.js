import express from "express";
import connectDatabase from "./database/db.js";
import dotenv from "dotenv";
import cors from "cors";

import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import swaggerRoute from "./routes/swagger.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDatabase();

app.use(cors({
  origin: ["https://fin-educa.vercel.app", "http://localhost:5500"],
  methods: ["GET", "POST", "PATCH"],
  credentials: true
}));

app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/doc", swaggerRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));