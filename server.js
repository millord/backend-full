const http = require("http");

const todos = ["hola", "tu"];
const newTodos = JSON.stringify(todos);

// creating a server

const server = http.createServer((req, res) => {
  res.writeHead(400, {
    "Content-Type": "application/json"
  });

  res.end(
    JSON.stringify({
      success: false,
      error: "Please add email",
      data: null
    })
  );
});

const PORT = 8000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
