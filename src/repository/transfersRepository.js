import prisma from "../utils/prisma.js";

export const createTransfer = async (data) => {
  const { player_id, from_club_id, to_club_id, transfer_fee } = data;
  const newTransfer = await prisma.transfer.create({
    data: {
      player_id,
      from_club_id,
      to_club_id,
      transfer_fee,
    },
  });

  await prisma.player.update({
    where: { user_id: player_id },
    data: {
      club_id: to_club_id,
    },
  });
  return newTransfer;
};

export const findById = async (id) => {
  return await prisma.player.findUnique({
    where: { user_id: Number(id) },
  });
};
