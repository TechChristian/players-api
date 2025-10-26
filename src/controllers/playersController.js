import * as playerService from "../services/playerService.js";

export const createPlayer = async (req, res) => {
  try {
    const playerCreate = await playerService.createPlayer(req.body); //pega os dados do corpo (req.body)
    res.status(201).json({ playerCreate });
  } catch (e) {
    res.status(500).json({ message: "Erro ao criar o jogador!" });
  }
};

export const updatePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const playerUpdate = await playerService.updatePlayer(id, req.body);
    res.status(201).json({ playerUpdate });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Erro ao atualizar o Jogador!" });
  }
};

export const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const playerDelete = await playerService.deletePlayer(id, req.body);
    res
      .status(201)
      .json({ message: "Jogador deletado com sucesso", playerDelete });
  } catch (e) {
    res.status(500).json({ message: "Erro ao deletar o Jogador!" });
  }
};

export const getAllPlayers = async (req, res) => {
  try{ 
    const getAllPlayers = await playerService.getAllPlayer();

  res.status(201).json({message: "Jogadores Listados com Sucesso!", getAllPlayers})
  }catch(e){
    console.log(e)
    res.status(500).json({message: "Erro ao Listar Jogadores!"})
  }
}