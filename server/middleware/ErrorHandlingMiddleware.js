import { DatabaseError } from 'sequelize';
import ApiError from '../error/ApiError.js';
import BussinesError from '../error/BussinesError.js';

export default function (err, req, res, next) {

    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message })
    }

    if (err instanceof BussinesError) {
        return res.status(err.status).json({ message: err.message })
    }

    if (err instanceof DatabaseError) {
        return res.status(err.status).json({ message: err.message })
    }
    
    return res.status(500).json({ message: 'unexpected error' })
}