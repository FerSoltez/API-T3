import { Request, Response, NextFunction } from "express";
import UsuarioModel from "../models/usuarios";

const usuarioController = {
  createUsuario: async (req: Request, res: Response) => {
    try {
      const newUsuario = await UsuarioModel.create(req.body);
      res.status(201).json(newUsuario);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  },

  getAllUsuarios: async (req: Request, res: Response) => {
    try {
      const usuarios = await UsuarioModel.findAll();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  },

  getUsuario: async (req: Request, res: Response) => {
    try {
      const usuario = await UsuarioModel.findByPk(req.params.id);
      if (usuario) {
        res.status(200).json(usuario);
      } else {
        res.status(404).json({ message: "Usuario no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  },

  updateUsuario: async (req: Request, res: Response) => {
    try {
      const [updated] = await UsuarioModel.update(req.body, { where: { id: req.params.id } });
      if (updated) {
        const updatedUsuario = await UsuarioModel.findByPk(req.params.id);
        res.status(200).json(updatedUsuario);
      } else {
        res.status(404).json({ message: "Usuario no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  },

  deleteUsuario: async (req: Request, res: Response) => {
    try {
      const deleted = await UsuarioModel.destroy({ where: { id: req.params.id } });
      if (deleted) {
        res.status(200).json({ message: "Usuario eliminado exitosamente" });
      } else {
        res.status(404).json({ message: "Usuario no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  },

  partialUpdateUsuario: async (req: Request, res: Response, next: NextFunction) => {    try {
      const usuario = await UsuarioModel.findByPk(req.params.id);
      if (!usuario) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      await UsuarioModel.update(req.body, { where: { id: req.params.id } });
      const updatedUsuario = await UsuarioModel.findByPk(req.params.id);
      res.status(200).json(updatedUsuario);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  },
};

export default usuarioController;
