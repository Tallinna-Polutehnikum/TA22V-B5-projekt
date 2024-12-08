import ApiError from "../error/ApiError.js";
import User from "../models/user.js";

class UserController
{
    async registration(req, res)
    {
        const {name} = req.body
        const user = await User.create({name})
        return res.json({name})
    };
    async login(req, res)
    {
        
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