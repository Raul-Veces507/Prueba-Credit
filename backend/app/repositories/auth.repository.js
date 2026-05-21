const db = require("../config/db");

class AuthRepository {

    async findByEmail( email) {

        return db("users").where({email}).first();
    }

}

module.exports =new AuthRepository();