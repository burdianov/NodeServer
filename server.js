const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ok: true});
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});