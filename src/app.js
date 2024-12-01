// Importa o express para criar o servidor, e os controladores e rotas necessários
import express from 'express';
import { initializeDatabase } from './controllers/initializeDB.js';  // Controlador para inicializar o banco de dados
import despesasRoutes from './routes/despesas.js';  // Importando rotas de despesas
import tiposPagamentosRoutes from './routes/tipos-pagamento.js';  // Importando rotas de tipos de pagamento
import categoriasRoutes from './routes/categorias.js';  // Importando rotas de categorias

const port = 3000;

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
app.listen(port, () => console.log("Server ON\n"));

console.log(`
    \nROUTES :\n
    Exibir Despesas Mês Vigente:   GET  http://localhost:${port}/api/despesa\n
    Exibir TODAS as Despesas:      GET  http://localhost:${port}/api/despesa/all\n
    Exibir Categorias:             GET  http://localhost:${port}/api/categorias\n
    Exibir Tipos de Pagamentos:    GET  http://localhost:${port}/api/tipos-pagamento\n
    Inserir Nova Despesa:          POST http://localhost:${port}/api/despesa
    `);