const express = require('express');
const { getUserController, updateUserController, updatePasswordController, resetPasswordController, deleteProfileController } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//routes
//GET USER || GET
router.get("/getUser", authMiddleware, getUserController);

//UPDATE PROFILE || PUT
router.put("/updateUser", authMiddleware, updateUserController );

// password update
router.put("/updatePassword", authMiddleware, updatePasswordController );

// password reset
router.post("/resetPassword", authMiddleware, resetPasswordController );

// Delete user
router.delete("/deleteUser/:id", authMiddleware, deleteProfileController );


module.exports = router;