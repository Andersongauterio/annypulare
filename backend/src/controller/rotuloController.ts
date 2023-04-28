import { Request, Response } from 'express';
import RotuloModel from '../model/RotuloModel';

const rotuloModel = new RotuloModel();

export const rotuloController = {
  async create(req: Request, res: Response) {
    try {
      const rotulo = req.body;
      const result = await rotuloModel.create(rotulo);
      return res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const result = await rotuloModel.get();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await rotuloModel.getById(Number(id));
      if (!result) {
        return res.status(404).json({ message: 'Rotulo not found' });
      }
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const rotulo = req.body;
      const result = await rotuloModel.update(Number(id), rotulo);
      if (!result) {
        return res.status(404).json({ message: 'Rotulo not found' });
      }
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await rotuloModel.delete(Number(id));
      res.status(200).json({ message: 'Rotulo deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

export { rotuloModel };
