// Importa a função openDb para abrir a conexão com o banco de dados
import { openDb } from '../config/configDB.js';

// Função assíncrona para inserir uma nova despesa no banco de dados
export async function insertDespesa(despesa) {
    // Ajusta a data e hora para o fuso horário local de São Paulo (-3h)
    const dataHoraAtual = new Date();
    dataHoraAtual.setHours(dataHoraAtual.getHours() - 3); // Subtrai 3 horas para ajustar para o fuso horário de São Paulo
    //dataHoraAtual.setMonth(dataHoraAtual.getMonth() - 3); // Subtraindo 3 meses para criar dados de teste do filtro (mês vigente)
    despesa.data_compra = dataHoraAtual.toISOString(); // Define a data de compra como a data ajustada

    try {
        // Abre a conexão com o banco de dados
        const db = await openDb();

        // Verifica se o tipo de pagamento existe no banco de dados
        const tipoPagamento = await db.get('SELECT id FROM TipoPagamento WHERE id = ?', [despesa.tipo_pagamento_id]);
        if (!tipoPagamento) throw new Error('Tipo de pagamento inválido.');

        // Verifica se a categoria existe no banco de dados
        const categoria = await db.get('SELECT id FROM Categorias WHERE id = ?', [despesa.categoria_id]);
        if (!categoria) throw new Error('Categoria inválida.');

        // Insere a nova despesa na tabela 'Despesas'
        const result = await db.run(`
            INSERT INTO Despesas 
            (valor, data_compra, descricao, tipo_pagamento_id, categoria_id)
            VALUES (?, ?, ?, ?, ?)`,
            [
                despesa.valor, 
                despesa.data_compra, 
                despesa.descricao, 
                despesa.tipo_pagamento_id, 
                despesa.categoria_id
            ]
        );

        // Retorna o ID da despesa inserida
        return result.lastID;
    } catch (error) {
        // Em caso de erro, lança uma exceção com a mensagem de erro
        throw new Error('Erro ao inserir despesa: ' + error.message);
    }
}
