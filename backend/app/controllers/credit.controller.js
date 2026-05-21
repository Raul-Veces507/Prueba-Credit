const service = require("../services/credit.service");

const { createCreditSchema, updateStatusSchema } = require("../validators/credit.validator");

class CreditController {


    async create(req, res, next) {

        try {

            const validated = createCreditSchema.parse(req.body);

            const data = await service.create(validated);

            return res
                .status(201)
                .json({
                    success: true,
                    message: "Request created",
                    data

                });

        }
        catch (error) {

            next(error);

        }

    }


    async findAll(req, res, next
    ) {

        try {

            const data = await service.findAll(req.query.status);

            return res.json({
                success: true,
                data
            });

        }
        catch (error) {
            next(error);
        }

    }


    async updateStatus(req, res, next
    ) {

        try {
            const validated = updateStatusSchema.parse(req.body);
            const data =

                await service.updateStatus(
                    req.params.id,
                    validated.status,
                    validated.comment

                );

            return res.json({

                success: true,
                message: "Status updated",
                data

            });

        }
        catch (error) {

            next(error);

        }

    }

}

module.exports =
    new CreditController();