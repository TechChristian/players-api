import prisma from "../utils/prisma.js";

//Criar Clubes
export const createClube = async (req, res) => {
  try {
    const { club_name, country } = req.body;

    if (!club_name || !country) {
      return res.status(400).json({ message: "dados invalidos ou indefinidos." });
    }

    const existingClub = await prisma.club.findUnique({
      where: { club_name },
    });

    if (existingClub) {
      return res.status(400).json({ message: "este clube ja existe." });
    }

    const NewClub = await prisma.club.create({
      data: {
        club_name,
        country,
      },
    });

    res.status(201).json({ NewClub });
  } catch (err) {
    res.status(400).json({ messsage: "Erro ao Criar o Clube." });
  }
};

export const updateClube = async (req, res) => {
  try {
    const { club_name, country } = req.body;
    const updateClub = await prisma.club.update({
      where: {
        club_id: Number(req.params.id),
      },
      data: {
        club_name,
        country,
      },
    });
    res.status(200).json({ message: "Clube atualizado com sucesso!", updateClub });
  } catch (err) {
    res.status(500).json({ message: "Erro ao Atualizar o Clube." });
  }
};

export const deleteClube = async (req, res) => {
  try {
    await prisma.club.delete({
      where: {
        club_id: Number(req.params.id),
      },
    });
    res.status(200).json({ message: "Clube Deletado com Sucesso!", deleteClube });
  } catch (err) {
    res.status(500).json({ message: "Erro ao Deletar Clube" });
  }
};

export const getClubes = async (req, res) => {
  try{
    const listClub =await prisma.club.findMany({
     select:{
      club_id : true,
      club_name: true,
      country:true
     }
    })
    res.status(200).json({message : "Clubes listados com Sucesso",listClub});
  }catch(err){
    res.status(500).json({message : "Erro ao Listar Clubes!"})
  }
}