const express = require('express');

const UserController = require('../Controller/DetailTransaksi');

const router = express.Router();


router.get('/', UserController.getAllDetailTransaksi);
router.post('/', UserController.createNewDetailTransaksi);
router.patch('/:idDetailTransaksi', UserController.editDetailTransaksi);
router.delete('/:idDetailTransaksi', UserController.deleteDetailTransaksi);

module.exports = router;