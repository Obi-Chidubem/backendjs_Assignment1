const http = require("http");
const { hostname } = require("os");
const port = 8900;
host_name = "localhost";

const server = http.createServer((req, res) => {
  res.end("Ohayo. I am Obi Chidubem Michael.");
});

server.listen(port, host_name, () => {
  console.log(`Server running successfully on ${port}`);
});
