import path from "node:path";
import express from "express";
import * as dotenv from "dotenv";
import bootstrap from "./src/config/app.controller.js";

dotenv.config({ path: path.resolve("./src/config/.env.dev") });

const app = express();

bootstrap(app, express);
