const express = require('express')  //Express Route
const cors = require("cors");
const { PrismaClient } = require('@prisma/client');

const app = express(); //Express Route
const port = 5557;
const prisma = new PrismaClient();
const apiRouter = require("./routes/apiRoutes");


app.use(cors());
app.use(express.json()); //Express Middleware

app.use("/api", apiRouter);






app.listen(port, () => {
    console.log(`Server is running at http:localhost:${port}`);
});
