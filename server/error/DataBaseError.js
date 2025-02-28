export default class DataBaseError extends Error    //used for repositories
{
    constructor(message)
    {
        super();
        this.message = 'DB error; ' + message;
    }

    static getMessage(message)
    {
        return new DataBaseError(message)
    }

} 