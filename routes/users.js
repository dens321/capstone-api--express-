const express = require('express');
const router = express.Router();
const userController = require("../controllers/usersController");

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createNewUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

router.route('/:username').get(userController.getUserByUsername);

module.exports = router;