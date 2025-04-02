import ApiError from '../error/ApiError.js';

export default function (err, req, res, next) 
{
    next(ApiError.badRequest('Page is not exist'));
}