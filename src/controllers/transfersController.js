import * as transferService from "../services/transfersService.js";

export const createTransfer = async (req, res) => {
  try {
    const newTransfer = await transferService.createTransfer(req.body);
    res
      .status(201)
      .json({ message: "Transferência Feita com Sucesso!", newTransfer });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "erro ao concluir transferencia" });
  }
};
