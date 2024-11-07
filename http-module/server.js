// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req, "req");
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello! I built my first server");
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Serve is now listening to port ${port}`);
// });

const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
  // console.log(req, "req");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world I built my first server");
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
