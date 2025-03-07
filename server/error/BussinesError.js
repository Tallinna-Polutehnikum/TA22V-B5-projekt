export default class BussinesError extends Error     //universal bussines logic error
{
    constructor(message, addition) {
        super();
        this.message = message + addition;
    }

    static notFound(message) {
        const addition = "is not found";
        return new BussinesError(message, addition);
    }

    static invalidDataType(message) {
        const addition = "has invalid data type";
        return new BussinesError(message, addition);
    }

    static alreadyExists(message){
        const addition = 'already exists';
        return new BussinesError(message, addition);
    }

    static accessDenied(message) {
        const addition = "access denied";
        return new BussinesError(message, addition);
    }

    static notExists(message) {
        const addition = "is not exists";
        return new BussinesError(message, addition);
    }
} 