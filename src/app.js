
import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão!", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});


const app = express();
app.use(express.json());


// Não precisaremos mais desses dados mockados!
/* const livros = [
    {   id: 1,
        titulo: "2001: Uma Odisséia no Espaço" },
    {   id: 2,
        titulo: "O Hobbit" } ] 
*/


// Esta rota pode ficar...
app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
} );


// Rota que retorna todos os livros cadastrados
// lá no MongoDB:

app.get("/livros", async (req, res) => {

    const listaLivros = await livro.find({});

    res.status(200).json(listaLivros);
} );






/* 
// Tratando a requisição POST:
app.post("/livros", (req, res) => {

    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");

} );



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

export default app;
