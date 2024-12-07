import ApiError from "../error/ApiError.js"
class UserController
{
    async registration(req, res)
    {
        res.json({message: 'reg page'})
    };
    async login(req, res)
    {
        res.json({message: 'login page'})
    };
    async authenticate(req, res, next)
    {
        const {id}= req.query
        if(!id){
            return next(ApiError.badRequest('id is not found'))
        }
        res.json(id)
    };
    async delete(req, res)
    {

    };
}

export default new UserController()