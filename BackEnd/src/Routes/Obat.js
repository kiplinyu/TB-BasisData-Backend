const express = require('express');

const UserController = require('../Controller/Obat');

const router = express.Router();


router.get('/', UserController.getAllObat);
router.post('/', UserController.createNewObat);
router.patch('/:idObat', UserController.editDataObat);
router.delete('/:idObat', UserController.deleteObat);

module.exports = router;