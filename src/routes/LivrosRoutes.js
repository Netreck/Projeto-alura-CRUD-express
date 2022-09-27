import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.listarLivroPorEditora)
  .post ("/livros" , LivroController.cadastrarLivro)
  .put ("/livros/:id", LivroController.atualizarLivro)
  .get("/livros/:id", LivroController.listarLivroPorID)
  .delete("/livros/:id", LivroController.excluirLivro)
  
  export default router;