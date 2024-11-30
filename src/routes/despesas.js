import { Router } from 'express';
import { openDb } from '../config/configDB.js';
import { insertDespesa } from '../controllers/despesas.js';

const router = Router();

// Rota para obter despesas
router.get('/api/despesa', async (req, res) => {
    try {
        const db = await openDb();
        const despesas = await db.all('SELECT * FROM Despesas');
        res.json({
            success: true,
            data: despesas
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
});

// Rota para inserir uma despesa
router.post('/api/despesa', async (req, res) => {
    try {
        const idDespesa = await insertDespesa(req.body);
        res.json({
            success: true,
            data: { id: idDespesa }
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
});

export default router;
