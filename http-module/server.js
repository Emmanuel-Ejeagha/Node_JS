const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req, "req");
});

const port = 3000;
server.listen(port, () => {
  console.log(`Serve is now listening to port ${port}`);
});
