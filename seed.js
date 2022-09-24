const { db, Player, Games } = require("./db");

const seedDb = async () => {
  //connects and clears database
  await db.sync({ force: true, logging: false });

  const eduardo = await Player.create({
    username: "Eduardo",
  });

  const emily = await Player.create({
    username: "Emily",
  });

  const kelsey = await Player.create({
    username: "Kelsey",
  });

  await Games.create({
    result: "computer",
    playerId: kelsey.id,
  });

  await Games.create({
    result: "human",
    playerId: eduardo.id,
  });

  await Games.create({
    result: "tie",
    playerId: kelsey.id,
  });

  await Games.create({
    result: "tie",
    playerId: emily.id,
  });

  await Games.create({
    result: "human",
    playerId: emily.id,
  });

  await Games.create({
    result: "computer",
    playerId: kelsey.id,
  });
};

seedDb();
