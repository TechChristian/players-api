import * as playerService from "../services/playerService.js";

export const createPlayer = async (req, res) => {
  try {
    const playerCreate = await playerService.createPlayer(req.body); //pega os dados do corpo (req.body)
    res.status(201).json({ playerCreate });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const playerUpdate = await playerService.updatePlayer(id, req.body);
    res.status(200).json({ playerUpdate });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const playerDelete = await playerService.deletePlayer(id);
    res
      .status(200)
      .json({ message: "Jogador deletado com sucesso", playerDelete });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar o Jogador!" });
  }
};

export const getAllPlayers = async (_, res) => {
  try {
    const getAllPlayers = await playerService.getAllPlayer();

    res
      .status(200)
      .json({ message: "Jogadores Listados com Sucesso!", getAllPlayers });
  } catch (e) {
    res.status(500).json({ message: "Erro ao Listar Jogadores!" });
  }
};
