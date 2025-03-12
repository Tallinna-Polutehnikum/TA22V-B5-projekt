//used in services for DB error marking

export default class DataBaseError extends Error {
    constructor(message) {
        super();
        this.message = 'DB error: ' + message;
    }

    static getMessage(message) {
        return new DataBaseError(message)
    }

} 