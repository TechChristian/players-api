import * as transferService from "../services/transfersService.js";

export const createTransfer = async (req, res) => {
  try {
    const newTransfer = await transferService.createTransfer(req.body);
    res
      .status(201)
      .json({ message: "Transferência Feita com Sucesso!", newTransfer });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getAllTransfers = async (_, res) => {
  try {
    const getAllTransfers = await transferService.transfers();
    res.status(201).json({
      message: "Transferencias Listadas com Sucesso!",
      getAllTransfers,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Erro Ao listar Transferencias!" });
  }
};
