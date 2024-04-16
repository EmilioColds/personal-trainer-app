const express = require('express');
const router = express.Router();


app.get("/", (req, res)=>{
    res.send("aqui estas llegando a home de trainning '/api/trainning/'" )
})