import { openDb } from '../config/configDB.js';

export async function populateCategorias() {
    try {
        const db = await openDb();

        const existingCategorias = await db.all('SELECT * FROM Categorias');
        if (existingCategorias.length === 0) {

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
            console.log('Tabela Categorias já contém dados.');
        }
    } catch (error) {
        console.error('Erro ao popular a tabela Categorias:', error.message);
    }
}