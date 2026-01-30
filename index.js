const express = require('express')
const { CreateUserRoute } = require("./user")
const { CreatecourserRoutes } = require("./user")
const app = express();


CreateUserRoute(app);
CreatecourserRoutes(app);



app.listen(3000);
