import express from "express";
import BookController from "../controllers/BookController.js";

const routes = express.Router();

routes.get("/books", BookController.list);
routes.get("/books/:id", BookController.listById);
routes.post("/books", BookController.create);
routes.put("/books/:id", BookController.update);
routes.delete("/books/:id", BookController.remove);

export default routes;