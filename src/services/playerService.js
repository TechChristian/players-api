import prisma from "../utils/prisma.js";
export const createPlayer = async (data) => {
  //data recebe os dados do corpo (req.body)
  const { first_name, last_name, positon, age, club_id } = data;

  if (!first_name || !last_name || !positon || !age || !club_id) {
    throw new Error({ message: "Dados invalidos ou indefinidos." });
  }

  const playerExists = await prisma.player.findMany({
    where: { first_name, last_name },
  });

  if (playerExists.length > 0) {
    throw new Error({ message: "Este jogador ja existe." });
  }

  const playerCreate = await prisma.player.create({
    data: {
      first_name,
      last_name,
      positon,
      age,
      club_id,
    },
  });
  return playerCreate;
};

export const updatePlayer = async (id, data) => {
  const { first_name, last_name, positon, age } = data;

  const playerUpdate = await prisma.player.update({
    where: {
      user_id: Number(id),
    },
    data: {
      first_name,
      last_name,
      positon,
      age,
    },
  });

  if (!playerUpdate) {
    throw new Error({ message: "Jogador nao encontrado!" });
  }

  return playerUpdate;
};

export const deletePlayer = async (id) => {
  const playerDelete = await prisma.player.delete({
    where: {
      user_id: Number(id),
    },
  });
  return playerDelete;
};

export const getAllPlayer = async () => {
  const getAllPlayers = await prisma.player.findMany({
    select: {
      first_name: true,
      last_name: true,
      positon: true,
      age: true,
      club_id: true,
      club: true,
    },
  });
  return getAllPlayers;
};
