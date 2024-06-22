const express = require('express');

const UserController = require('../Controller/Golongan');

const router = express.Router();


router.get('/', UserController.getAllGolongan);
router.post('/', UserController.createNewGolongan);
router.patch('/:idGolongan', UserController.editDataGolongan);
router.delete('/:idGolongan', UserController.deleteGolongan);

module.exports = router;