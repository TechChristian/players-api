import prisma from "../utils/prisma.js";

// Criar Clube
export const createClube = async (data) => {
  const { club_name, country } = data;

  if (!club_name || !country) {
    throw new Error("Dados inválidos ou indefinidos.");
  }

  const existingClub = await prisma.club.findUnique({
    where: { club_name },
  });

  if (existingClub) {
    throw new Error("Este clube já existe.");
  }

  return await prisma.club.create({
    data: { club_name, country },
  });
};

// Atualizar Clube
export const updateClube = async (id, data) => {
  const { club_name, country } = data;

  try {
    return await prisma.club.update({
      where: { club_id: Number(id) },
      data: { club_name, country },
    });
  } catch (error) {
    throw new Error("Clube não encontrado!");
  }
};

// Deletar Clube
export const deleteClubes = async (id) => {
  try {
    return await prisma.club.delete({
      where: { club_id: Number(id) },
    });
  } catch (error) {
    throw new Error("Clube não encontrado!");
  }
};

// Listar Clubes
export const getAllClube = async (club_id) => {
  const where = club_id ? { club_id: Number(club_id) } : {};

  return await prisma.club.findMany({
    where,
    select: {
      club_id: true,
      club_name: true,
      country: true,
      players: true,
    },
  });
};
