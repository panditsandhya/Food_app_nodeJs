const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const { createFoodController, getAllFoodsController, getSingleFoodController, getFoodByResturantController, updateFoodController, deleteFoodController, placeOrderController, orderStatusController} = require('../controllers/foodController');


const router = express.Router();

//ROUTES

//CREATE FOOD
router.post('/create', authMiddleware, createFoodController);

//GET FOOD
router.get('/getAll', getAllFoodsController);

//GET SINGLE FOOD
router.get('/getSingle/:id', getSingleFoodController);

//GET FOOD BY RESTURANT
router.get('/getByResturant/:id', getFoodByResturantController);

//UPDATE FOOD 
router.put('/update/:id', authMiddleware, updateFoodController);

//DELETE FOOD
router.delete('/delete/:id', authMiddleware, deleteFoodController);

//PLACE ORDER
router.post('/placeorder', authMiddleware, placeOrderController);

//ORDER STATUS
router.post('/orderStatus/:id', authMiddleware, adminMiddleware, orderStatusController);

module.exports = router;