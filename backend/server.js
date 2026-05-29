const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./database');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/teste', (req, res) => {
    res.json({
        mensagem: 'Servidor Hydra funcionando!'
    });
});

app.get('/api/produtos', (req, res) => {

    db.all('SELECT * FROM produtos', [], (err, rows) => {

        if (err) {
            return res.status(500).json({
                erro: err.message
            });
        }

        res.json(rows);

    });

});

app.post('/api/produtos', (req, res) => {

    const { categoria, nome, preco } = req.body;

    if (!categoria || !nome || !preco) {
        return res.status(400).json({
            erro: 'Preencha todos os campos'
        });
    }

    db.run(
        `INSERT INTO produtos (categoria, nome, preco)
         VALUES (?, ?, ?)`,
        [categoria, nome, preco],
        function(err) {

            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.json({
                id: this.lastID,
                mensagem: 'Produto cadastrado!'
            });

        }
    );

});

app.put('/api/produtos/:id', (req, res) => {

    const { categoria, nome, preco } = req.body;

    db.run(
        `UPDATE produtos
         SET categoria = ?, nome = ?, preco = ?
         WHERE id = ?`,
        [categoria, nome, preco, req.params.id],
        function(err){

            if(err){
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.json({
                mensagem: 'Produto atualizado!'
            });

        }
    );

});

//deletar um produto
app.delete('/api/produtos/:id', (req, res) => {

    db.run(
        `DELETE FROM produtos WHERE id = ?`,
        [req.params.id],
        function(err){

            if(err){
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.json({
                mensagem: 'Produto removido!'
            });

        }
    );

});

//Importar produtos em Massa
app.post('/api/importar-produtos', (req, res) => {

    const produtos = req.body;

    const stmt = db.prepare(`
        INSERT INTO produtos (categoria, nome, preco)
        VALUES (?, ?, ?)
    `);

    produtos.forEach(produto => {

        stmt.run(
            produto.categoria,
            produto.nome,
            produto.preco
        );

    });

    stmt.finalize();

    res.json({
        mensagem: 'Produtos importados com sucesso!'
    });

});

//deletar produtos em massa
app.delete('/api/produtos', (req, res) => {

    db.run(`DELETE FROM produtos`, err => {

        if (err) {

            return res.status(500).json({
                erro: err.message
            });

        }

        res.json({
            mensagem: 'Todos produtos removidos'
        });

    });

});

app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor rodando na rede na porta 3000");
});