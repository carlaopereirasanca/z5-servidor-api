
import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

// Retirado o import do model, pq isso foi lá para o controller.

// Mas precisamos das nossas rotas, definidas lá no index.js em routes.
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão!", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});

const app = express();

// Aqui chamamos a função routes que criamos lá em index.js,
// passando a instância do express que criamos aqui, em app:
routes(app);

// Podemos retirar o middleware abaixo, pq ele foi lá
// para o index.js em routes:
//      app.use(express.json());

export default app;












/* 

// Recuperando apenas um livro:

app.get("/livros/:id", (req, res) => {

    const index = buscaLivro(req.params.id);

    if (index === -1) {
        return res.status(404).json( { message: "Livro não encontrado" } );
    }
    res.status(200).json(livros[index]);
});


// Alterando dados:

app.put("/livros/:id", (req, res) => {

    const index = buscaLivro(req.params.id);

    livros[index].titulo = req.body.titulo;
    res.status(200).json( livros[index] );
});


// Apagando dados:

app.delete("/livros/:id", (req, res) => {

    const index = buscaLivro(req.params.id);

    livros.splice( index, 1 );

    res.status(200).send("Livro removido!");
    console.log(livros);
})
 */


