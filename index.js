const { Player, Games } = require("./db");

const express = require("express");
const app = express();

app.get("/", async (req, res, next) => {
  res.send("connected");
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`Connected to PORT ${PORT}`);
});
