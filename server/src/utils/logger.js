import { createLogger, format, transports } from "winston";
const { combine, colorize, timestamp, errors, printf, splat, metadata } = format;

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

console.log("Loggings");
export default createLogger({
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
  transports: [new transports.Console(), new transports.Http()],
});
