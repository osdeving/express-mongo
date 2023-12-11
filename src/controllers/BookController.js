import Book from '../models/Book.js';


class BookController {

    static async list(req, res) {
        try {
            const bookList = await Book.find({});
            res.status(200).json(bookList);
        } catch(error) {
            res.status(500).json({message: `${error.message} - falha na requisição`})
        }
    }

    static async listById(req, res) {
        try {
            const id = req.params.id;
            const bookFound = await Book.findById(id);
            res.status(200).json(bookFound);
        } catch(error) {
            res.status(500).json({message: `${error.message} - falha na requisição do livro`})
        }
    }

    static async create(req, res) {
        try {
            const newBook = await Book.create(req.body);
            res.status(201).json({message: "criado com sucesso", book: newBook});
        } catch(error) {
            res.status(500).json({message: `${error.message} - falha ao cadastrar livro`})
        }
    }

    static async update (req, res) {
        try {
          const id = req.params.id;
          await Book.findByIdAndUpdate(id, req.body);
          res.status(200).json({ message: "livro atualizado" });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
      };
    
      static async remove (req, res) {
        try {
          const id = req.params.id;
          await Book.findByIdAndDelete(id);
          res.status(200).json({ message: "livro excluído com sucesso" });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na exclusão` });
        }
      };

}

export default BookController;