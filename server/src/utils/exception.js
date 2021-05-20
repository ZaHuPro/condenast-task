import log from "./logger";
import { errorRespond } from "./responder";

export const errorHandler = (err, req, res, next) => {
  log.error(err);
  return errorRespond(res, "Unexpected error from server", 500);
};

// prevent favicon from browser
export const ignoreFavicon = (req, res, next) => {
  if (req.originalUrl.includes("favicon.ico")) {
    //204 No Content
    res.status(204).end();
  }
  next();
};

export const notFoundHandler = (_express) => {
  _express.all("*", (req, res) => {
    // ip from client header or from express request object
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    log.error(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);
    return errorRespond(res, "URL not found", 404);
  });
  return _express;
};
