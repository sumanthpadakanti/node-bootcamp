const EventEmitter = require("events");
const http = require("http");

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
  console.log("new sale created");
});
myEmitter.on("newSale", () => {
  console.log("customer John created new sale");
});
myEmitter.emit("newSale");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request recevied");
  res.end("request recevied");
});
server.on("request", () => {
  console.log("another request recevied");
});
server.on("close", () => {
  console.log("server closed");
});
server.listen(4001, "127.0.0.1", () => {
  console.log("server started");
});
