const fs = require("fs");
const http = require("http");
fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
  console.log(data);
});

const text = `some text added to writeFile`;
fs.writeFile("./txt/writeFile.txt", text, "utf-8", (err) => {
  console.log(err);
});

const server = http.createServer((req, res) => {
  res.end(`Hello from server`);
});

server.listen("4000", "127.0.0.1", () => {
  console.log("start listenting to request");
});
