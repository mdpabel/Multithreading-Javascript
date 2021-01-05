const worker = new Worker("./workerfile.js");

worker.postMessage("HELLO WORLD");

worker.addEventListener("message", function (e) {
  console.log("Message from Worker: " + e.data);
});
