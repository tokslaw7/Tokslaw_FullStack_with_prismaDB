const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const apiRouter = express.Router();

apiRouter.get('/data', async (req, res)=> {
 try{
    const data = await prisma.user.findMany();
    return res.json(data);
 }catch (error) {
    console.log("Error fetching data: ", error);
    res.status(500).json({error: "Internal server error"});
 }
});


// app.use("/api", apiRouter);

module.exports = apiRouter;