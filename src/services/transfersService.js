import prisma from "../utils/prisma.js";
import * as transfersRepository from "../repository/transfersRepository.js";

export const createTransfer = async (data) => {
  const { player_id, from_club_id, to_club_id, transfer_fee } = data;
  if (
    typeof player_id !== "number" ||
    typeof from_club_id !== "number" ||
    typeof to_club_id !== "number"
  ) {
    throw new Error("IDs inválidos ou não enviados! ");
  }
  const existingPlayer = await transfersRepository.findById(player_id);

  if (!existingPlayer) {
    throw new Error("Este Player não existe!");
  }

  return await transfersRepository.createTransfer(data);
};

export const transfers = async () => {
  const getAllTransfers = await prisma.transfer.findMany({
    include: {
      player: true,
      fromclub: true,
      toClub: true,
    },
  });
  return getAllTransfers;
};
