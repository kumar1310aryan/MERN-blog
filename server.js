const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const PORT = process.env.PORT || 8000;

//initialize middleware
//we use to have to install body parser but now it is a buildt in middleware
//function of express. It parses incoming JSON payload
app.use(express.json({ extended: false }));

app.get("/api/articles/:name", async (req, res) => {
  try {
    const articleName = req.params.name;
    const client = await MongoClient.connect("mongodb://localhost:27017");
    const db = client.db("mernBlog");
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to database", error });
  }
});

app.get("/", (req, res) => res.send("hello world"));

app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  articlesInfo[articleName].comments.push({ username, text });
  res.status(200).send(articlesInfo[articleName]);
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
