const service =require("../services/auth.service" );

class AuthController {

    async login(req,res, next) {

        try {

            const data = await service.login(req.body.email,req.body.password);

            return res.json({
                success: true,
                data
            });

        }
        catch (error) {
            next(error);
        }

    }

}

module.exports =new AuthController();