// Importa o Router do Express e a função openDb para abrir a conexão com o banco de dados
import { Router } from 'express';
import { openDb } from '../config/configDB.js';

// Cria uma instância do Router
const router = Router();

// Rota para obter todas as categorias
router.get('/api/categorias', async (req, res) => {
    try {
        // Abre a conexão com o banco de dados
        const db = await openDb();

        // Executa a consulta para obter todas as categorias
        const categorias = await db.all('SELECT * FROM Categorias');

        // Retorna os dados das categorias em formato JSON
        res.json({
            success: true,
            data: categorias
        });
    } catch (error) {
        // Se ocorrer um erro, retorna a mensagem de erro em formato JSON
        res.json({
            success: false,
            message: error.message
        });
    }
});

// Exporta a instância do router para ser utilizada em outras partes do aplicativo
export default router;
