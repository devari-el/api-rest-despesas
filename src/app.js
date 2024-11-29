//import {openDb} from './configDB.js'
import { createTable } from './controllers/despesas.js';
import express from 'express';

const app = express();
app.use(express.json());

createTable();

app.get('/', function(rec, res){
    res.send("Hello tropa!!");
})

app.post('/despesa', function(req, res){
    console.log(req.body);
    res.json({
        "statusCode" : 200
    })
});

app.listen(3000, () => console.log("Tudo certo com a API"))