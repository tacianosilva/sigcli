import {
  createRecepcionist,
  deleteRecepcionistWithPrisma,
  findUniqueByIDRecepcionist,
  findUniqueByUsernameRecepcionist,
  updateRecepcionistWithPrisma,
} from "../repositories/recepcionistRepository.js";
export const registerRecepcionist = async (req, res) => {
  const recepcionistBody = req.body;

  const recepcionist = await createRecepcionist(recepcionistBody);
  res.json(recepcionist);
};

export const getByIdRecepcionist = async (req, res) => {
  const { id } = req.params;
  const recepcionist = await findUniqueByIDRecepcionist(id);
  return res.status(200).json(recepcionist);
};

export const getByUsernameRecepcionist = async (req, res) => {
  const { username } = req.params;
  const recepcionist = await findUniqueByUsernameRecepcionist(username);

  return res.status(200).json(recepcionist);
};

export const updateRecepcionist = async (req, res) => {
  const recepcionist = req.body;
  const updatedRecepcionist = await updateRecepcionistWithPrisma(recepcionist);
  res.json(updatedRecepcionist);
};

export const deleteRecepcionist = async (req, res) => {
  const id = req.params.id;
  const deletedRecepcionist = await deleteRecepcionistWithPrisma(id);
  res.json(deletedRecepcionist);
};
