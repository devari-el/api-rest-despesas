// Importa as funções responsáveis pela criação das tabelas e pela população de dados
import { createTable } from '../models/createTables.js';
import { populateCategorias } from './categorias.js';
import { populateTipoPagamento } from './tipos-pagamento.js';

// Função assíncrona para inicializar o banco de dados
export async function initializeDatabase() {
    try {
        // Cria as tabelas no banco de dados
        await createTable();
        
        // Popula as tabelas 'Categorias' e 'TipoPagamento' com dados iniciais
        await populateCategorias();
        await populateTipoPagamento();
        
        // Exibe mensagem de sucesso no console após a inicialização do banco de dados
        console.log('Banco de dados inicializado com sucesso.');
    } catch (error) {
        // Exibe mensagem de erro no console se algo falhar durante a inicialização
        console.error('Erro na inicialização do banco de dados:', error.message);
        throw error; // Propaga o erro para que possa ser tratado por outra parte do código
    }
}
