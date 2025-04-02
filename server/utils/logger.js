import winston from 'winston';
import path from 'path';

const logger = winston.createLogger({
  level: 'debug', // Logging messages with the level "info" and higher
  format: winston.format.combine(
    winston.format.colorize({
      all: true
    }),
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      const file = path.basename(new Error().stack.split('\n')[3].trim().split(' ')[1]); //get file address
      return `[${timestamp}] [${file}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console({level: 'info'}), // Outputs logs to the console
    new winston.transports.File({ filename: 'logs/app.log', level: 'http' }) // Writes logs to the file
  ]
});

//logger.add(consol).add(file);

export default logger;