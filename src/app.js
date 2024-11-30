import { openDb } from './configDB.js';
import { createTable, insertDespesa } from './controllers/despesas.js';
import express from 'express';

const app = express();
app.use(express.json());

createTable();

app.get('/api/despesa', async (req, res) => {
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

app.get('/api/tipos-pagamento', async (req, res) => {
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

app.get('/api/categorias', async (req, res) => {
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

app.post('/api/despesa', async (req, res) => {
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

app.listen(3000, () => console.log("Tudo certo com a API"))