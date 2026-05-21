exports.errorMiddleware = (err,req,res,next) => {

    if (err.name === "ZodError") {

        return res
            .status(400)
            .json({
                success: false,
                message:"Validation failed",
                errors:err.issues
            });

    }

    return res
        .status(err.status || 500)
        .json({
            success: false,
            message:err.message ||"Internal error"

        });

};