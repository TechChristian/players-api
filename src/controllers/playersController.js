import prisma from "../utils/prisma.js";

export const createPlayer = async (req, res) => {
  try {
    const { first_name, last_name, positon, age, club_id } = req.body;
    if (!first_name || !last_name || !positon || !age || !club_id) {
      return res
        .status(400)
        .json({ message: "Dados invalidos ou indefinidos." });
    }

    const playerExists = await prisma.player.findMany({
      where: { first_name, last_name },
    });

    if (playerExists.length > 0) {
      return res.status(400).json({ message: "Este jogador ja existe." });
    }
    const playerCreate = await prisma.player.create({
      data: {
        first_name,
        last_name,
        positon,
        age,
        club_id,
      },
    });
    res.status(200).json({
      message: "Jogador Criado e Adicionado a um clube com Sucesso!",
      playerCreate,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Erro ao Criar o Jogador!" });
  }
};

export const updatePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, positon, age } = req.body;

    const playerUpdate = await prisma.player.update({
      where: {
        user_id: Number(id),
      },
      data: {
        first_name,
        last_name,
        positon,
        age,
      },
    });

    if (!playerUpdate) {
      return res.status(404).json({ message: "Jogador nao encontrado!" });
    }

    res.status(200).json({
      message: "Jogador atualizado com sucesso!",
      playerUpdate,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Erro ao atualizar o jogador!" });
  }
};
