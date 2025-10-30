import prisma from "../utils/prisma.js";

export const createClube = async (data) => {
  const { club_name, country } = data;
  if (!club_name || !country) {
    return res.status(400).json({ message: "dados invalidos ou indefinidos." });
  }
  const existingClub = await prisma.club.findUnique({
    where: { club_name },
  });

  if (existingClub) {
    return res.status(400).json({ message: "este clube ja existe." });
  }

  const NewClub = await prisma.club.create({
    data: {
      club_name,
      country,
    },
  });
  return NewClub;
};

export const updateClube = async (id, data) => {
  const { club_name, country } = data;

  const clubeUpdate = await prisma.club.update({
    where: {
      club_id: Number(id),
    },
    data: {
      club_name,
      country,
    },
  });
  if (!clubeUpdate) {
    res.status(404).json({ message: "Clube não encontrado!" });
  }
  return clubeUpdate;
};

export const deleteClubes = async (id) => {
  const deleteClube = await prisma.club.delete({
    where: {
      club_id: Number(id),
    },
  });
  return deleteClube;
};

export const getAllClube = async (club_id) => {
  const where = club_id ? {club_id: Number(club_id)} : {};
  const getAllClubes = await prisma.club.findMany({
    where,
    select: {
      club_id: true,
      club_name: true,
      country: true,
      players: true
    },
  });
  return getAllClubes;
};
