const http = require("http");

// creating a server
const server = http.createServer(() => (req, res) => {
  res.send();
});

const PORT = 8000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
