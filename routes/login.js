const express = require('express');
const router = express.Router();

const loginController = require("../controllers/loginController");

router.post('/', loginController.handleNewUser);
    
// router.route('/login').get(userController.getUserByUsername)
// .put(userController.updateUser);

module.exports = router;