const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (url === "/schools") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Schools");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("This page cannot be found!");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening to port http://localhost:${port}`);
});
