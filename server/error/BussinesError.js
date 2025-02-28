export default class BussinesError extends Error     //bussines logic error
{
    constructor(message, addition)
    {
        super();
        this.message = addition + message;
    }
    static forbidden(message)
    {
        const addition = "Data not found: ";
        return new BussinesError(message, addition);
    }

    static invalid(message)
    {
        const addition = "Missing required data: ";
        return new BussinesError(message, addition );
    }
} 