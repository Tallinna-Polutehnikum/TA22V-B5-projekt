import {describe, test, jest, expect } from "@jest/globals";
import languageController from "../controllers/languageController";

describe('', () => {
    test('Must be return right responce', async () => {
        const req = { body: {} };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        await controller(req, res);

        expect(res.status).toHaveBeenCalledTimes(1);    //Status called 1 time
        expect(res.status).toHaveBeenCalledWith(200);   //Status is 200
        expect(res.json).toHaveBeenCalledTimes(1);  //JSON called 1 time
        //Need to check JSON data
    });

})
