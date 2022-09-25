const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/roshambo");

//instantiating Games table
const Games = db.define("game", {
  result: {
    type: Sequelize.STRING,
    allowNull: false,
    isIn: [["computer", "human", "tie"]],
  },
});

//instantiating Player table
const Player = db.define("player", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Player.hasMany(Games);
Games.belongsTo(Player);

module.exports = {
  db,
  Player,
  Games,
};
