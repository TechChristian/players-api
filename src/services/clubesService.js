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
