const express = require('express');
const router = express.Router();
const userController = require("../controllers/usersController");
const registerController = require("../controllers/registerController");

router.post('/', registerController.handleNewUser);
    
// router.route('/login').get(userController.getUserByUsername)
// .put(userController.updateUser);

module.exports = router;