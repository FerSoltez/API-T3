import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import usuariosRoutes from './routes/usuariosRoutes';
import localidadesRoutes from './routes/localidadesRoutes';
import municipiosRoutes from './routes/municipiosRoutes';

dotenv.config();
const app: Application = express();

// Middlewares  
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", usuariosRoutes);
app.use("/api", localidadesRoutes);
app.use("/api", municipiosRoutes);

// Ruta de prueba
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("¡API en funcionamiento!");
});

// Manejador de errores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal");
});

// Puerto del servidor
const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
