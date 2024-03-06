const http = require("http");
const port = 8900;

const server = http.createServer((req, res) => {
  res.end("Ohayo. I am Obi Chidubem Michael.");
});

server.listen(port, () => {
  console.log(`Server running successfully on ${port}`);
});
