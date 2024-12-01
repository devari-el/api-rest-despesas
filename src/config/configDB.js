// Importa o módulo sqlite3 para interação com bancos de dados SQLite
import sqlite3 from 'sqlite3'

// Importa a função 'open' do pacote 'sqlite' para abrir uma conexão com o banco de dados
import { open } from 'sqlite'

// Função assíncrona para abrir a conexão com o banco de dados SQLite
export async function openDb () {
    // Abre a conexão com o banco de dados 'database.db' usando o driver sqlite3
    return open({
        filename: './database.db',  // Caminho do arquivo do banco de dados
        driver: sqlite3.Database     // Define o driver de banco de dados como sqlite3
    })  
}