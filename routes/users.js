const express = require('express');
const router = express.Router();
const userController = require("../controllers/usersController");

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createNewUser)
    .delete(userController.deleteUser);
    
router.route('/:username').get(userController.getUserByUsername)
.put(userController.updateUser);

module.exports = router;