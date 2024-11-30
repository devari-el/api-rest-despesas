import { openDb } from '../config/configDB.js';  // Importar o openDb

export async function createTable() {
    const db = await openDb();  // Abre o banco antes de executar as tabelas
    
    await db.exec(`
        CREATE TABLE IF NOT EXISTS TipoPagamento (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tipo TEXT NOT NULL
        )
    `);

    await db.exec(`
        CREATE TABLE IF NOT EXISTS Categorias (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        descricao TEXT NOT NULL
        )
    `);

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

    await db.exec('PRAGMA foreign_keys = ON');
}
