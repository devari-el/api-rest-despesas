// Importa a função openDb para abrir a conexão com o banco de dados
import { openDb } from '../config/configDB.js';

// Função assíncrona para popular a tabela 'TipoPagamento' com dados iniciais, se necessário
export async function populateTipoPagamento() {
    try {
        // Abre a conexão com o banco de dados
        const db = await openDb();

        // Verifica se já existem registros na tabela 'TipoPagamento'
        const existingTipoPagamento = await db.all('SELECT * FROM TipoPagamento');
        if (existingTipoPagamento.length === 0) {

            // Se não houver registros, insere dados iniciais na tabela 'TipoPagamento'
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
            // Se já houver registros, informa que a tabela já contém dados
            console.log('Tabela TipoPagamento já contém dados.');
        }
    } catch (error) {
        // Em caso de erro, exibe a mensagem de erro
        console.error('Erro ao popular a tabela TipoPagamento:', error.message);
    }
}
