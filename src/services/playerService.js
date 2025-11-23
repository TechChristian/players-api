import prisma from "../utils/prisma.js";

// Criar Player
export const createPlayer = async (data) => {
  const { first_name, last_name, positon, age, club_id } = data;

  if (!first_name || !last_name || !positon || !age || !club_id) {
    throw new Error("Dados inválidos ou indefinidos.");
  }

  const playerExists = await prisma.player.findMany({
    where: { first_name, last_name },
  });

  if (playerExists.length > 0) {
    throw new Error("Este jogador já existe.");
  }

  return await prisma.player.create({
    data: { first_name, last_name, positon, age, club_id },
  });
};

// Atualizar Player
export const updatePlayer = async (id, data) => {
  const { first_name, last_name, positon, age } = data;

  try {
    return await prisma.player.update({
      where: { user_id: Number(id) },
      data: { first_name, last_name, positon, age },
    });
  } catch (error) {
    throw new Error("Jogador não encontrado!");
  }
};

// Deletar Player
export const deletePlayer = async (id) => {
  try {
    return await prisma.player.delete({
      where: { user_id: Number(id) },
    });
  } catch (error) {
    throw new Error("Jogador não encontrado!");
  }
};

// Listar Players
export const getAllPlayer = async () => {
  return await prisma.player.findMany({
    select: {
      first_name: true,
      last_name: true,
      positon: true,
      age: true,
      club_id: true,
      club: true,
    },
  });
};
