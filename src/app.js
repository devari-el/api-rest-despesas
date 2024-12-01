// Importa o express para criar o servidor, e os controladores e rotas necessários
import express from 'express';
import { initializeDatabase } from './controllers/initializeDB.js';  // Controlador para inicializar o banco de dados
import despesasRoutes from './routes/despesas.js';  // Importando rotas de despesas
import tiposPagamentosRoutes from './routes/tipos-pagamento.js';  // Importando rotas de tipos de pagamento
import categoriasRoutes from './routes/categorias.js';  // Importando rotas de categorias

// Cria uma instância do aplicativo Express
const app = express();

// Configura o Express para aceitar requisições com corpo em formato JSON
app.use(express.json());

// Inicializa o banco de dados (cria as tabelas e popula com dados iniciais, se necessário)
initializeDatabase();

// Usa as rotas importadas
app.use(despesasRoutes);  // Define as rotas de despesas
app.use(tiposPagamentosRoutes);  // Define as rotas de tipos de pagamento
app.use(categoriasRoutes);  // Define as rotas de categorias

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => console.log("Tudo certo com a API"));
