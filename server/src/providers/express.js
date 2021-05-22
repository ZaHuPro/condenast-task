import express from "express";
import cors from 'cors'
import log, { morganMiddleware } from "../utils/logger";
import apiRouter from "../router/Api";
import { PORT, API_PREFIX } from "./configs";
import { errorHandler, notFoundHandler, ignoreFavicon } from "../utils/exception";

export default () => {
  log.info("Express :: Initializes the express server");
  let app = express();
  
  log.info("Middleware :: Booting the middleware...");
  app.use(cors())
  // Enables the request body parser
  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  
  app.use(morganMiddleware)

  log.info("Routes :: Mounting API Routes...");
  app.use(`/${API_PREFIX}`, apiRouter);

  log.info("Exception :: Registering Exception/Error Handlers...");
  app.use(ignoreFavicon);
  app.use(errorHandler);
  app = notFoundHandler(app)

  // listens for connections on the specified ports
  app.listen(PORT, (_error) => {
    if (_error) {
      return log.error(_error);
    }
    return log.info(`Listening :: Server is running @ ${PORT}`);
  });
  return app;
};
