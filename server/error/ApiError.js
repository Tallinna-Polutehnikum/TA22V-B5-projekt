export default class ApiError extends Error     //universal error
{
    constructor(status, message)
    {
        super();
        this.status = status
        this.message = message
    }
    static forbidden(message)
    {
        return new ApiError(403, message);
    }

    static badRequest(message)
    {
        return new ApiError(404, message);
    }
    
    static internal(message)
    {
        return new ApiError(500, message);
    }

} 