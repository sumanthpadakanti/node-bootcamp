const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  //solution 1
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) {
  //       console.log("err", err);
  //     }
  //     res.end(data);
  //   });

  //solution 2
  //   const stream = fs.createReadStream("test-files.txt");
  //   let i = 0;
  //   stream.on("data", (chunk) => {
  //     console.log(i++);
  //     res.write(chunk);
  //   });
  //   stream.on("end", () => {
  //     res.end("read stream complete");
  //   });
  //   stream.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File not found");
  //   });

  // solution 3
  const stream = fs.createReadStream("test-file.txt");
  stream.pipe(res);
});

server.listen(4000, "127.0.0.1", () => {
  console.log("server listening");
});
