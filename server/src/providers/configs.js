import dotenv from "dotenv";
import log from "../utils/logger";

log.info("ENV :: Registering the env file");
dotenv.config();

log.info("Configs :: Initializes the configs");
export const ENV = process.env.NODE_ENV || "development";
export const PORT = process.env.PORT || 5000;
export const API_PREFIX = process.env.API_PREFIX || "api";
export const API_KEY = process.env.API_KEY || "";

export default {
  PORT,
  ENV,
  API_PREFIX,
};
