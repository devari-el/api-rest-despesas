import { openDb } from '../config/configDB.js';

export async function insertDespesa(despesa) {
    // Ajusta a data para o fuso horário local (considerando -3h para São Paulo)
    const dataHoraAtual = new Date();
    dataHoraAtual.setHours(dataHoraAtual.getHours() - 3); // Subtraindo 3 horas para o fuso horário de São Paulo
    despesa.data_compra = dataHoraAtual.toISOString();

    try {
        const db = await openDb();

        // Verificar se tipo_pagamento_id é válido
        const tipoPagamento = await db.get('SELECT id FROM TipoPagamento WHERE id = ?', [despesa.tipo_pagamento_id]);
        if (!tipoPagamento) throw new Error('Tipo de pagamento inválido.');

        // Verificar se categoria_id é válido
        const categoria = await db.get('SELECT id FROM Categorias WHERE id = ?', [despesa.categoria_id]);
        if (!categoria) throw new Error('Categoria inválida.');

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

        return result.lastID;
    } catch (error) {
        throw new Error('Erro ao inserir despesa: ' + error.message);
    }
}
