const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/register', authController.register);
router.post('/login', authController.login);


router.get('/profile', authMiddleware, authController.getProfile);
router.put('/update', authMiddleware, authController.updateUser);
router.delete('/delete', authMiddleware, authController.deleteUser);

module.exports = router;