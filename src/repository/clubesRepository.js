import prisma from "../utils/prisma.js";

export const createClub = async (data) => {
  return await prisma.club.create({
    data,
  });
};

export const filterByName = async (club_name) => {
  return await prisma.club.findUnique({
    where: { club_name },
  });
};

export const updateClub = async (id, data) => {
  return await prisma.club.update({
    where: { club_id: Number(id) },
    data,
  });
};

export const filterById = async (id) => {
  return await prisma.club.findUnique({
    where: { club_id: Number(id) },
  });
};

export const deleteClub = async (id) => {
  return await prisma.club.delete({
    where: { club_id: Number(id) },
  });
};

export const getAllClub = async (club_id) => {
  const where = club_id ? { club_id: Number(club_id) } : {};
  //Cria Lista Clube
  return await prisma.club.findMany({
    where,
    select: {
      club_id: true,
      club_name: true,
      country: true,
    },
  });
};

export const findById = async (id) => {
  return await prisma.club.findUnique({
    //filtra clube pelo ID
    where: { club_id: Number(id) },
    select: {
      club_id: true,
      club_name: true,
      country: true,
    },
  });
};
