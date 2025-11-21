import prisma from "../utils/prisma.js";

export const createTransfer = async (data) => {
  const { player_id, from_club_id, to_club_id, transfer_fee } = data;
  if (
    typeof player_id !== "number" ||
    typeof from_club_id !== "number" ||
    typeof to_club_id !== "number"
  ) {
    return res.status(400).json({ message: "IDs inválidos ou não enviados! " });
  }
  const existingPlayer = await prisma.player.findUnique({
    where: { user_id: player_id },
  });
  if (!existingPlayer) {
    res.status(400).json({ message: "Este Player não existe!" });
  }
  const newTransfer = await prisma.transfer.create({
    data: {
      player_id,
      from_club_id,
      to_club_id,
      transfer_fee,
    },
  });
  // Atualiza o jogador para o novo clube
  await prisma.player.update({
    where: { user_id: player_id },
    data: {
      club_id: to_club_id,
    },
  });
  return newTransfer;
};
