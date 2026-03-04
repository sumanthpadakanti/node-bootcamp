const fs = require("fs");

fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
  console.log(data);
});

const text = `some text added to writeFile`;
fs.writeFile("./txt/writeFile.txt", text, "utf-8", (err) => {
  console.log(err);
});
