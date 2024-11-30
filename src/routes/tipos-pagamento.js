import { Router } from 'express';
import { openDb } from '../config/configDB.js';

const router = Router();

// Rota para obter tipos de pagamento
router.get('/api/tipos-pagamento', async (req, res) => {
    try {
        const db = await openDb();
        const tiposPagamento = await db.all('SELECT * FROM TipoPagamento');
        res.json({
            success: true,
            data: tiposPagamento
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
});

export default router;
