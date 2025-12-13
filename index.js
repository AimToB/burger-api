import express from "express";

const app = express();

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Connected to the server on PORT: %c${PORT}!`, "color: green");
});
