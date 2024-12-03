import express from 'express';
import userRoutes from './userRoutes.js';

const router = express.Router();

router.use('/users', userRoutes);       // Rotas para usuários

export default router;
