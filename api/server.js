const express = require("express");
const mongoose = require("mongoose");
const http = require("http");

//helpers
const { URL, PORT } = require("./utils/constants");
const {applyMiddleware} = require("./utils");
const middleware = require("./middleware");

//routes
const router = express();
const server = http.createServer(router);

//this function will allow us to apply any middleware we need every time our router is ran. 
applyMiddleware(middleware, router);

//routes
router.use(`/users`, userRouter)

mongoose.connect(URL, {useNewUrlParser:true}).then(function listen(){
  server.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
  })
}).catch(function errorHandling(err){
  console.log(err);
})
//routes