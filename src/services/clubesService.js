import * as clubesRepository from "../repository/clubesRepository.js";

// Criar Clube
export const createClube = async (data) => {
  const { club_name, country } = data;

  if (!club_name || !country) {
    throw new Error("Dados inválidos ou indefinidos.");
  }

  const existingClub = await clubesRepository.filterByName(club_name);

  if (existingClub) {
    throw new Error("Este clube já existe.");
  }
  return await clubesRepository.createClub({ club_name, country });
};

// Atualizar Clube
export const updateClube = async (id, data) => {
  const { club_name, country } = data;
  const existingClub = await clubesRepository.filterById(id);

  if (!existingClub) {
    throw new Error("Este Clube não Existe.");
  }
  return await clubesRepository.updateClub(id, { club_name, country });
};

// Deletar Clube
export const deleteClub = async (id) => {
  const existingClub = await clubesRepository.filterById(id);
  if (!existingClub) {
    throw new Error("Clube não Encontrado.");
  }
  return await clubesRepository.deleteClub(id);
};

// Listar Clubes
export const getAllClube = async (club_id) => {
  if (club_id) {
    const club = await clubesRepository.findById(club_id);

    if (!club) {
      throw new Error("Clube não encontrado.");
    }
    return club;
  }
  return await clubesRepository.getAllClub();
};
