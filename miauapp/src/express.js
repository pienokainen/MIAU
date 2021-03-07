import express from "express";
import path from "path";

const PORT = 8000;

const app = express();

app.use(express.static("build"));
app.listen(PORT);

console.log("Running at port: " + PORT);

app.get("/", (req, res) => {
  res.sendFile(path.resolve("../build/index.html"));
});
