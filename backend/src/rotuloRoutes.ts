import express from 'express';
import { rotuloController } from './controller/rotuloController';

const router = express.Router();

// Routes for Rotulo entity
router.get('/rotulos', rotuloController.getAll);
router.get('/rotulos/:id', rotuloController.getById);
router.post('/rotulos', rotuloController.create);
router.put('/rotulos/:id', rotuloController.update);
router.delete('/rotulos/:id', rotuloController.delete);

export { router };
