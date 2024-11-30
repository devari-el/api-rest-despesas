import { openDb } from '../config/configDB.js';

export async function populateTipoPagamento() {
    try {
        const db = await openDb();

        const existingTipoPagamento = await db.all('SELECT * FROM TipoPagamento');
        if (existingTipoPagamento.length === 0) {

            await db.run(`
                INSERT INTO TipoPagamento (tipo) 
                VALUES 
                ('Dinheiro'), 
                ('Crédito'), 
                ('Débito'), 
                ('Pix')
            `);
            console.log('Tabela TipoPagamento populada com dados iniciais.');
        } else {
            console.log('Tabela TipoPagamento já contém dados.');
        }
    } catch (error) {
        console.error('Erro ao popular a tabela TipoPagamento:', error.message);
    }
}