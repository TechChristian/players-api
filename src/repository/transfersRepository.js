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
  //Atualiza o Player após a transferencia for Feita
  await prisma.player.update({
    where: { user_id: player_id },
    data: {
      club_id: to_club_id,
    },
  });
  return newTransfer;
};
//buscar Player no Banco
export const findById = async (id) => {
  return await prisma.player.findUnique({
    where: { user_id: Number(id) },
  });
};

export const getAllTransfers = async () => {
  return await prisma.transfer.findMany({
    include: {
      player: true,
      fromclub: true,
      toClub: true,
    },
  });
};
