import express from 'express';
import connectToDatabase from './config/dbConnect.js';


const dbConnection = await connectToDatabase();


dbConnection.on("error", (error) => {
    console.error("Erro de conexao com o banco", error);
});

dbConnection.once("open", () => console.log("Conexão com o banco feita com sucesso!"));

const app = express();

app.use(express.json());

const books = [
    {
        id: 1,
        title: 'O Senhor dos Anéis'
    },
    {
        id: 2,
        title: 'O Hobbit'
    }
];


function getBook(id) {
    return books.findIndex(book => book.id == id);
}

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.get('/books/:id', (req, res) => {
    const index = getBook(req.params.id);

    res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send('Livro criado com sucesso!');
})

app.put("/books/:id", (req, res) => {
    const index = getBook(req.params.id);

    books[index].title = req.body.title;
    res.status(200).send(books);
})

app.delete("/books/:id", (req, res) => {
    const index = getBook(req.params.id);

    books.splice(index, 1);

    res.status(200).send("Livro removido com sucesso!");
})

export default app;