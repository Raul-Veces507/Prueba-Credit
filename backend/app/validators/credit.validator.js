const { z } = require(
    "zod"
);

exports.createCreditSchema =

    z.object({

        applicantId:
            z.string().min(1,"Applicant required"),

        amount:
            z.number().min(500,"Minimum amount is 500")
                .max(50000,"Maximum amount is 50000"),

        termMonths:
            z.number().min(6,"Minimum term is 6")
                .max(60,"Maximum term is 60")

    });


exports.updateStatusSchema =

    z.object({

        status:
            z.enum([
                "APPROVED",
                "REJECTED"
            ]),

        comment:
            z.string().min(5,"Comment required")

    });