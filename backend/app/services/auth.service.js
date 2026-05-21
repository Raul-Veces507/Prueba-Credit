const repository = require("../repositories/auth.repository");

const bcrypt =require(    "bcryptjs");

const jwt =require(    "jsonwebtoken");

class AuthService {

    async login(email,password) {

        const user =await repository.findByEmail(email);

        if (!user) {
            throw {
                status: 401,
                message:"Invalid credentials"
            };

        }


        const valid =await bcrypt.compare(password,user.password);


        if (!valid) {
            throw {
                status: 401,
                message:"Invalid credentials"
            };

        }


        const token =

            jwt.sign(
                {
                    id: user.id,
                    email: user.email

                },process.env.JWT_SECRET,

                {
                    expiresIn:
                    "24h"

                }

            );


        return {
            token
        };

    }

}

module.exports =new AuthService();