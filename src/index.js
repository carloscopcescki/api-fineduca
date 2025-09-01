import express from "express";
import connectDatabase from "./database/db.js";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import swaggerRoute from "./routes/swagger.route.js";
import { registerSite } from "./routes/registerSite.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const allowed = [process.env.FRONTEND_ORIGIN, "http://localhost:5173", "http://localhost:3000"];
app.use(helmet());
app.use(cors({ origin: allowed, methods: ["GET","POST","PATCH","DELETE"] }));

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/doc", swaggerRoute);

registerSite(app);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

