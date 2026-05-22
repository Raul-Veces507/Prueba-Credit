const db = require("../config/db");

class CreditRepository {

    async create(data) {

        const [id] = await db("credit_requests")
            .insert({
                applicantId: data.applicantId,
                amount: data.amount,
                termMonths: data.termMonths
            });

        return this.findById(id);

    }


    async findById(id) {
        return db("credit_requests").where({ id }).first();
    }


    async findAll(status) {

        let query = db("credit_requests");

        if (status) {

            query.where("status", status);

        }

        return query.orderBy("id", "desc");

    }


    async updateStatus(id, status) {

        await db("credit_requests").where({ id }).update({ status });

        return this.findById(id);

    }


    async createHistory(data) {

        return db("request_history").insert(data);

    }

    async getHistory(id) {
        return await db("request_history"

        ).where({id: id })
            .orderBy(
                "created_at",
                "desc"

            );

    }

}

module.exports =
    new CreditRepository();