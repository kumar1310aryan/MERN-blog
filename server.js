const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

//initialize middleware
//we use to have to install body parser but now it is a buildt in middleware
//function of express. It parses incoming JSON payload
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("hello world"));

app.post("/", (req, res) =>
  res.send(`habibi...tm kaisi hoti ${req.body.name}`)
);

app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`));

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
