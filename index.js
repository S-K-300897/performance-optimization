const express = require("express");
const app = express();

//app.get("/", (req, res) => {
// return res.status(200).send("Doing load test to analyse performance");
//});

// load test
//apache benchmark tool
//-n total no of requests
// -c no requests per milli sec
// -k keep it alive

//module.exports.run = function () {
//app.listen(5000, () => console.log("listening to port 5000...."));
//};

const { Worker } = require("worker_threads"); 

//let counter = 0;
//app.get("/", (req, res) => {
 // counter++;
 // return res.status(200).json({ counter });
//});

//app.get('/intensive',(req, res) => {
//  for (let i = 0; i <= 1000000000; i++) {
//    counter++;
 //   console.log("counter -----", counter);
  //}
  //return res.status(200).json({ counter });
//});

app.get("/intensive", (req, res) => {
  const worker = new Worker("./workers.js", {
    workerData: {
      counter,
      total: 1000000000,
    },
  });

  worker.on("message", (data) => {
   // console.log("message ->", data);
  })
  
});

app.listen(5000, () => console.log("listening to port 5000...."));
