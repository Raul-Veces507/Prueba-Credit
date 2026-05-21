const express=require("express");
const cors=require("cors");
const helmet=require("helmet");

const creditRoutes=
require("./routes/credit.routes");

const authRoutes=
require("./routes/auth.routes");

const {
    errorMiddleware
}=require(
"./middleware/error.middleware"
);

const app=express();


app.use(
cors({

origin:"http://localhost:4200",

credentials:true

})
);

app.use(
helmet()
);

app.use(
express.json()
);


app.use(
"/api/v1/auth",
authRoutes
);

app.use(
"/api/v1/credit-requests",
creditRoutes
);

app.use(
errorMiddleware
);

module.exports=app;