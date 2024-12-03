import db from '../models/index.js';

// Controlador para listar todos os usuários
export const getAllUsers = async (req, res) => {
  try {
    const users = await db.User.findAll(); // Recupera todos os usuários
    res.json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
};

// Controlador para buscar um usuário por ID
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await db.User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.json(user);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).json({ error: 'Erro ao buscar usuário.' });
  }
};

// Controlador para criar um novo usuário
export const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await db.User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
};

// Controlador para atualizar um usuário
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const user = await db.User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    await user.update({ name, email });
    res.json(user);
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ error: 'Erro ao atualizar usuário.' });
  }
};

// Controlador para excluir um usuário
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await db.User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    await user.destroy();
    res.status(204).send(); // Responde sem conteúdo
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    res.status(500).json({ error: 'Erro ao excluir usuário.' });
  }
};
