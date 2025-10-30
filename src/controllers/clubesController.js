import * as clubesService from "../services/clubesService.js";

//Criar Clubes
export const createClube = async (req, res) => {
  try {
    const NewClub = await clubesService.createClube(req.body);
    res.status(201).json({ message: "Clube Criado com Sucesso!", NewClub });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Erro ao Criar o Clube!" });
  }
};

export const clubeUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const clubeUpdate = await clubesService.updateClube(id, req.body);
    res
      .status(201)
      .json({ message: "Clube Atualizado com sucesso", clubeUpdate });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Erro ao Atualizar o Clube!" });
  }
};

export const deleteClube = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteClube = await clubesService.deleteClubes(id);
    res
      .status(201)
      .json({ message: "Clube Deletado com Sucesso!", deleteClube });
  } catch (e) {
    res.status(500).json({ message: "Erro ao Deletar Clube!" });
  }
};

export const getAllClubes = async (req, res) => {
  try {
    const { club_id } = req.query;
    const getAllClube = await clubesService.getAllClube(club_id);
    res.status(200).json(getAllClube);
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: "Erro ao Listar os Clubes!" });
  }
};
