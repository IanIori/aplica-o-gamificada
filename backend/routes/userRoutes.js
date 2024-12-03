import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

// Rotas para os usuários
router.get('/', getAllUsers);          // Lista todos os usuários
router.get('/:id', getUserById);       // Busca usuário por ID
router.post('/', createUser);          // Cria um novo usuário
router.put('/:id', updateUser);        // Atualiza um usuário
router.delete('/:id', deleteUser);     // Exclui um usuário

export default router;
