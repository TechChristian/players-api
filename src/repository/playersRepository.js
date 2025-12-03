import prisma from "../utils/prisma.js";

export const createPlayer = async (data) => {
  return await prisma.player.create({
    data,
  });
};

export const findByPlayer = async (first_name, last_name, positon, age) => {
  return await prisma.player.findMany({
    where: {first_name, last_name, positon, age },
  });
};

export const updatePlayer = async (id, data) => {
  return await prisma.player.update({
    where: { user_id: Number(id) },
    data,
  });
};

export const findById = async (id) => {
  return await prisma.player.findUnique({
    where: { user_id: Number(id) },
  });
};

export const deletePlayer = async (id) => {
  return await prisma.player.delete({
    where: { user_id: Number(id) },
  });
};

export const getAllPlayers = async (user_id) => {
  return await prisma.player.findMany({
    select: {
      user_id: true,
      first_name: true,
      last_name: true,
      positon: true,
      age: true,
      club_id: true,
      club: true,
    },
  });
};

export const findPlayerId = async (id) => {
  return prisma.player.findUnique({
    where: { player_id: id },
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

