import morgan from "morgan";
import { createLogger, format, transports, addColors } from "winston";
const { combine, colorize, timestamp, errors, printf, splat, metadata } =
  format;

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "cyan",
};

// Tell winston that you want to link the colors
addColors(colors);

const customFormat = printf(({ level, message, timestamp, metadata }) => {
  let format = `${timestamp} | ${level} | ${message}`;
  if (metadata) {
    if (metadata.stack) {
      format = `${format} | ${metadata.stack}`;
    } else if (
      metadata instanceof Object &&
      Object.entries(metadata).length > 0
    ) {
      format = `${format} | ${JSON.stringify(metadata)}`;
    }
  }
  return format;
});

const Logger = createLogger({
  level: "debug",
  format: combine(
    // error stack trace in metadata
    errors({ stack: true }),
    metadata(),
    // timestamp to logger
    timestamp(),
    //string interpolation
    splat(),
    customFormat,
    // print with color in console
    colorize({ all: true })
  ),
  transports: [new transports.Console()],
});

const stream = {
  write: (message) => Logger.http(message),
};

// Build the morgan middleware
export const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream }
);

export default Logger;
