import chalk from 'chalk';

const logger = {
    log: (level, message, extra = '') => {
        const levels = {
            success: chalk.green, // Green
            error: chalk.red,     // Red
            info: chalk.blue      // Blue
        };

        const color = levels[level] || chalk.blue; // Default to Blue for 'info'
        console.log(color(`[ ${level.toUpperCase()} ] ${message}`), extra);
    },

    success: (message, extra = '') => logger.log('success', message, extra),
    error: (message, extra = '') => logger.log('error', message, extra),
    info: (message, extra = '') => logger.log('info', message, extra),
};

export default logger;
