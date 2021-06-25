const router = require('express').Router()
const clientsController = require('../controllers/clients')

router.get('/', async (req, res) => {
    clientsController.getClients(res);
})

router.get('/:id', async (req, res) => {
    clientsController.getClientsByID(res, req.params.id);
})

router.post('/', async (req, res) => {
    clientsController.postClient(req, res);
})

router.patch('/:id', async (req, res) => {
    clientsController.pathClient(req, res, req.params.id);
})

router.delete('/:id', async (req, res) => {
    clientsController.deleteClient(res, req.params.id);
})

module.exports = router