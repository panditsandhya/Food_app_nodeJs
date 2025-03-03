const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createResturantController, getAllResturantController, getResturantByIdController, deleteResturantController } = require('../controllers/resturantController');


const router = express.Router();

//ROUTES
//CREATE RESTURANT || POST
router.post('/create', authMiddleware, createResturantController);

// GET ALL RESTURANTS || GET
router.get('/getAll', getAllResturantController);

// GET RESTURANY BY ID 
router.get('/get/:id', getResturantByIdController);

// DELETE RESTURANT 
router.delete('/delete/:id', authMiddleware, deleteResturantController);

module.exports = router;