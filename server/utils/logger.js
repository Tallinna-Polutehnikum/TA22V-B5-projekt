import winston from 'winston/lib/winston/config';

const logger = winston.createLogger({
  level: 'info', // Logging messages with the level "info" and higher
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      const file = path.basename(new Error().stack.split('\n')[3].trim().split(' ')[1]); //get file address
      return `[${timestamp}] [${file}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // Outputs logs to the console
    new winston.transports.File({ filename: 'logs/app.log' }) // Writes logs to the file
  ]
});

export default logger;