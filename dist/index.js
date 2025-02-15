"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const usariosRoutes_1 = __importDefault(require("./routes/usariosRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middlewares  
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use("/api", usariosRoutes_1.default);
// Ruta de prueba
app.get("/", (req, res, next) => {
    res.send("¡API en funcionamiento!");
});
// Manejador de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Algo salió mal");
});
// Puerto del servidor
const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
