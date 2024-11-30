// src/app.js
import express from 'express';
import { initializeDatabase } from './controllers/initializeDB.js';
import despesasRoutes from './routes/despesas.js';  // Importando rotas de despesas
import tiposPagamentosRoutes from './routes/tipos-pagamento.js';  // Importando rotas de tipos de pagamento
import categoriasRoutes from './routes/categorias.js';  // Importando rotas de categorias

const app = express();
app.use(express.json());

// Inicializando o banco de dados
initializeDatabase();

// Usando as rotas
app.use(despesasRoutes);
app.use(tiposPagamentosRoutes);
app.use(categoriasRoutes);

// Iniciando o servidor
app.listen(3000, () => console.log("Tudo certo com a API"));
