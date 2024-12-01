// Importa o Router do Express, a função openDb para abrir a conexão com o banco de dados,
// e a função insertDespesa para inserir uma nova despesa
import { Router } from 'express';
import { openDb } from '../config/configDB.js';
import { insertDespesa } from '../controllers/despesas.js';

// Cria uma instância do Router
const router = Router();

// Rota para obter despesas do mês vigente
router.get('/api/despesa', async (req, res) => {
    try {
        // Abre a conexão com o banco de dados
        const db = await openDb();

        // Obter o ano e o mês atual
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        const mesAtual = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Meses começam do 0, então somamos 1

        // Busca as despesas do mês vigente no banco de dados
        const despesas = await db.all(`
            SELECT * 
            FROM Despesas 
            WHERE strftime('%Y', datetime(data_compra, 'localtime')) = ? 
            AND strftime('%m', datetime(data_compra, 'localtime')) = ?`,
            [anoAtual.toString(), mesAtual.toString()]
        );

        // Retorna as despesas encontradas em formato JSON
        res.json({
            success: true,
            data: despesas
        });
    } catch (error) {
        // Em caso de erro, exibe o erro no console e retorna uma resposta JSON com a mensagem de erro
        console.error('Erro ao buscar despesas:', error); 
        res.json({
            success: false,
            message: error.message
        });
    }
});

// Rota para obter todas as despesas
router.get('/api/despesa/all', async (req, res) => {
    try {
        // Abre a conexão com o banco de dados
        const db = await openDb();

        // Busca todas as despesas no banco de dados
        const despesas = await db.all(`
            SELECT * 
            FROM Despesas
        `);

        // Retorna todas as despesas em formato JSON
        res.json({
            success: true,
            data: despesas
        });
    } catch (error) {
        // Em caso de erro, exibe o erro no console e retorna uma resposta JSON com a mensagem de erro
        console.error('Erro ao buscar todas as despesas:', error); 
        res.json({
            success: false,
            message: error.message
        });
    }
});

// Rota para inserir uma nova despesa
router.post('/api/despesa', async (req, res) => {
    try {
        // Chama a função insertDespesa passando os dados da despesa do corpo da requisição
        const idDespesa = await insertDespesa(req.body);

        // Retorna a resposta JSON com o ID da despesa inserida
        res.json({
            success: true,
            data: { id: idDespesa }
        });
    } catch (error) {
        // Em caso de erro, retorna uma resposta JSON com a mensagem de erro
        res.json({
            success: false,
            message: error.message
        });
    }
});

// Exporta o router para ser utilizado em outras partes do aplicativo
export default router;
