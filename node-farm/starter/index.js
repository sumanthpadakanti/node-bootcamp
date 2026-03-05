const fs = require("fs");
const http = require("http");

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
  console.log(data);
});

const text = `some text added to writeFile`;
fs.writeFile("./txt/writeFile.txt", text, "utf-8", (err) => {
  console.log(err);
});

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName == "/" || pathName == "/overview") {
    res.end(`Overview details`);
  } else if (pathName == "/product") {
    res.end(`Product details`);
  } else if (pathName == "/api") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(`${data}`);
  } else {
    res.writeHead(404, {
      "content-type": "application/json",
      "cache-control": "no-cache",
    });
    res.end(`Page not found`);
  }
});

server.listen("4000", "127.0.0.1", () => {
  console.log("start listenting to request");
});
