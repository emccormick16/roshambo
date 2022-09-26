const express = require("express");
const router = express.Router();
const html = require("html-template-tag");

const { Player, Games } = require("../db");

router.get("/:gameId", async (req, res, next) => {
  const gameId = req.params.gameId;
  const games = await Games.findOne({
    include: Player,
    where: {
      id: gameId,
    },
  });
  res.send(html` <!DOCTYPE html>
    <html>
      <head>
        <title>Game #${games.id}</title>
      </head>
      <body>
        <h1>Game #${games.id}</h1>
        <h2>Winner: ${games.result}</h2>
        <h2>Player: ${games.player.username}
      </body>
    </html>`);
});

module.exports = router;
