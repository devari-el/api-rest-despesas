// Importa a função openDb para abrir a conexão com o banco de dados
import { openDb } from '../config/configDB.js';  

// Função assíncrona para criar as tabelas necessárias no banco de dados
export async function createTable() {
    // Abre a conexão com o banco de dados
    const db = await openDb();  

    // Cria a tabela 'TipoPagamento' caso não exista
    await db.exec(`
        CREATE TABLE IF NOT EXISTS TipoPagamento (
            id INTEGER PRIMARY KEY AUTOINCREMENT,  
            tipo TEXT NOT NULL  
        )
    `);

    // Cria a tabela 'Categorias' caso não exista
    await db.exec(`
        CREATE TABLE IF NOT EXISTS Categorias (
            id INTEGER PRIMARY KEY AUTOINCREMENT,  
            nome TEXT NOT NULL,  
            descricao TEXT NOT NULL  
        )
    `);

    // Cria a tabela 'Despesas' caso não exista
    await db.exec(`
        CREATE TABLE IF NOT EXISTS Despesas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,  
            valor REAL NOT NULL,  
            data_compra DATETIME NOT NULL,  
            descricao TEXT NOT NULL,  
            tipo_pagamento_id INTEGER NOT NULL,  
            categoria_id INTEGER NOT NULL,  
            FOREIGN KEY (tipo_pagamento_id) REFERENCES TipoPagamento(id),  
            FOREIGN KEY (categoria_id) REFERENCES Categorias(id)  
        )
    `);

    // Habilita a verificação de chaves estrangeiras para garantir a integridade referencial
    await db.exec('PRAGMA foreign_keys = ON');
}
