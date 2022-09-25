const express = require("express");
const router = express.Router();

const { Player, Games } = require("../db");

router.get("/:gameId", async (req, res, next) => {
  const gameId = req.params.gameId;
  const games = await Games.findOne({
    include: Player,
    where: {
      id: gameId,
    },
  });
  res.send(games);
});

module.exports = router;
