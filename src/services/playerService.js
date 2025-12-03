import * as playersRepository from "../repository/playersRepository.js";

// Criar Player
export const createPlayer = async (data) => {
  const { first_name, last_name, positon, age, club_id } = data;

  if (!first_name || !last_name || !positon || !age || !club_id) {
    throw new Error("Dados inválidos ou indefinidos.");
  }

  const playerExists = await playersRepository.findByPlayer(
    first_name,
    last_name,
    positon,
    age
  );

  if (playerExists.length > 0) {
    throw new Error("Este jogador já existe.");
  }
  return await playersRepository.createPlayer(data);
};

// Atualizar Player
export const updatePlayer = async (id, data) => {
  const { first_name, last_name, positon, age } = data;
  const existingPlayer = await playersRepository.findById(id);

  if (!existingPlayer) {
    throw new Error("Este Jogador não existe.");
  }

  return await playersRepository.updatePlayer(id, data);
};

// Deletar Player
export const deletePlayer = async (id) => {
  const existingPlayer = await playersRepository.findById(id);

  if (!existingPlayer) {
    throw new Error("Este Jogador não existe.");
  }
  return playersRepository.deletePlayer(id);
};

// Listar Players
export const getAllPlayer = async (user_id) => {
  if (user_id) {
    const player = await playersRepository.findPlayerId(user_id);

    if (!player) {
      throw new Error("Erro ao listar Jogadores.");
    }
    return player;
  }
  return playersRepository.getAllPlayers();
};
