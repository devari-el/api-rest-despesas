import { createTable } from '../models/createTables.js';
import { populateCategorias } from './categorias.js';
import { populateTipoPagamento } from './tipos-pagamento.js';

export async function initializeDatabase() {
    try {
        // Cria as tabelas
        await createTable();
        
        // Popula as tabelas após a criação
        await populateCategorias();
        await populateTipoPagamento();
        
        console.log('Banco de dados inicializado com sucesso.');
    } catch (error) {
        console.error('Erro na inicialização do banco de dados:', error.message);
        throw error; // Propaga o erro para tratamento externo
    }
}
