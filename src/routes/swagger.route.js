import { Router } from "express";
const route = Router();

import swaggerUi from "swagger-ui-express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const swaggerDocumment = require("../swagger.json");

route.use("/", swaggerUi.serve);
route.get("/", swaggerUi.setup(swaggerDocumment));


export default route;
