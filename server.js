const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ok: false});
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});