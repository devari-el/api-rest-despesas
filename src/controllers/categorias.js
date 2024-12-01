// Importa a função openDb para abrir a conexão com o banco de dados
import { openDb } from '../config/configDB.js';

// Função assíncrona para popular a tabela 'Categorias' com dados iniciais, se necessário
export async function populateCategorias() {
    try {
        // Abre a conexão com o banco de dados
        const db = await openDb();

        // Verifica se já existem registros na tabela 'Categorias'
        const existingCategorias = await db.all('SELECT * FROM Categorias');
        if (existingCategorias.length === 0) {

            // Se não houver registros, insere dados iniciais na tabela 'Categorias'
            await db.run(`
                INSERT INTO Categorias (nome, descricao) 
                VALUES 
                ('Alimentação', 'Restaurante'), 
                ('Lazer', 'Clube'), 
                ('Saúde', 'Farmácia'), 
                ('Contas', 'Luz')
            `);
            console.log('Tabela Categorias populada com dados iniciais.');
        } else {
            // Se já houver registros, informa que a tabela já contém dados
            console.log('Tabela Categorias já contém dados.');
        }
    } catch (error) {
        // Em caso de erro, exibe a mensagem de erro
        console.error('Erro ao popular a tabela Categorias:', error.message);
    }
}
