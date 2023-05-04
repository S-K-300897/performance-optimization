const { parentPort, workerData } = require("worker_threads");

let counter = 0;

console.log("worker data", workerData);
for (let i = 0; i <= 1000000000; i++) {
  counter++;
}

parentPort.postMessage("from worker SK");
