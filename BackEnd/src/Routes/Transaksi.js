const express = require('express');

const UserController = require('../Controller/Transaksi');

const router = express.Router();


router.get('/', UserController.getAllTransaksi);
router.post('/', UserController.createNewTransaksi);
router.patch('/:idTransaksi', UserController.editTransaksi);
router.delete('/:idTransaksi', UserController.deleteTransaksi);

module.exports = router;