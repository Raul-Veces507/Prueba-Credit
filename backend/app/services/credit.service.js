const repository =
    require(
        "../repositories/credit.repository"
    );

class CreditService {

    async create(data) {

        return repository.create(data);

    }


    async findAll(status) {

        return repository.findAll(status);

    }


    async updateStatus(id,status,comment) {

        const request =
            await repository.findById(id);

        if (!request) {

            throw {
                status: 404,
                message:"Request not found"
            };

        }


        if (request.status !== "PENDING") {

            throw {
                status: 409,
                message:"Request already processed"
            };

        }


        await repository.createHistory({
            requestId: id,
            previousStatus:request.status,
            newStatus:status,
            comment

        });


        return repository.updateStatus(id,status);

    }

}

module.exports =
    new CreditService();