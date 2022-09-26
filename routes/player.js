const express = require("express");
const router = express.Router();
const html = require("html-template-tag");

const { Player, Games } = require("../db");

router.get("/", async (req, res, next) => {
  const players = await Player.findAll();
  res.send(html`<!DOCTYPE html>
    <html>
      <head>
        <title>Players</title>
      </head>
      <body>
        <h1>Players</h1>
        ${players.map(
          (player) => `
        <div>
            <h2>${player.username}</h2>
        `
        )}
      </body>
    </html>`);
});

router.get("/:playerId", async (req, res, next) => {
  const playerId = req.params.playerId;

  const player = await Player.findOne({
    where: {
      id: playerId,
    },
  });

  const games = await Games.findAll({
    include: Player,
    where: {
      playerId: playerId,
    },
  });

  res.send(
    html` <!DOCTYPE html>
      <html>
        <head>
          <title>Player: ${player.username}</title>
        </head>
        <body>
          <h1>Player: ${player.username}</h1>
          <h2>Games Played:</h2>
          ${games.map(
            (game) => `
          <div>
              <h2>Game ID: ${game.id}</h2>
              <h3>Winner: ${game.result}</h3>
          `
          )}
        </body>
      </html>`
  );
});

module.exports = router;
