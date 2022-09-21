const express = require('express');
const router = express.Router();

const LinksController = require('./controllers/linksController');

router.get('/links', LinksController.buscarTodos);
router.get('/link/:codigo', LinksController.buscarUm);
router.post('/link', LinksController.inserir);
router.put('/link/:codigo', LinksController.alterar);
router.delete('/link/:codigo', LinksController.excluir);

module.exports = router;