import { Router } from 'express';
import { openDb } from '../config/configDB.js';

const router = Router();

// Rota para obter categorias
router.get('/api/categorias', async (req, res) => {
    try {
        const db = await openDb();
        const categorias = await db.all('SELECT * FROM Categorias');
        res.json({
            success: true,
            data: categorias
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
});

export default router;
