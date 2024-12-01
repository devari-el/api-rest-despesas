// Importa o Router do Express e a função openDb para abrir a conexão com o banco de dados
import { Router } from 'express';
import { openDb } from '../config/configDB.js';

// Cria uma instância do Router
const router = Router();

// Rota para obter todos os tipos de pagamento
router.get('/api/tipos-pagamento', async (req, res) => {
    try {
        // Abre a conexão com o banco de dados
        const db = await openDb();

        // Executa a consulta para obter todos os tipos de pagamento
        const tiposPagamento = await db.all('SELECT * FROM TipoPagamento');

        // Retorna os dados dos tipos de pagamento em formato JSON
        res.json({
            success: true,
            data: tiposPagamento
        });
    } catch (error) {
        // Se ocorrer um erro, retorna a mensagem de erro em formato JSON
        res.json({
            success: false,
            message: error.message
        });
    }
});

// Exporta o router para ser utilizado em outras partes do aplicativo
export default router;
