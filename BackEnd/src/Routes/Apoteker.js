const express = require('express');

const UserController = require('../Controller/Apoteker');

const router = express.Router();


router.get('/', UserController.getAllDataApoteker);
router.post('/', UserController.createNewApoteker);
router.patch('/:idApoteker', UserController.editDataApoteker);
router.delete('/:idApoteker', UserController.deteleApoteker);

module.exports = router;