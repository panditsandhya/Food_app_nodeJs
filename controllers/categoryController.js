const categoryModel = require("../models/categoryModel");

// CREATE CAT
const createCatController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    // validation
    if (!title) {
      return res.status(500).send({
        success: false,
        message: "please provide category title or image",
      });
    }
    const newCategory = new categoryModel({ title, imageUrl });
    await newCategory.save();
    res.status(201).send({
      success: true,
      message: "Category created",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Create API",
      error,
    });
  }
};

// GET ALL CAT
const getAllCatController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    if (!categories) {
      return res.status(404).send({
        success: false,
        message: "No Categories Found",
      });
    }
    res.status(200).send({
      success: true,
      totalCat: categories.length,
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get All Category API",
      error,
    });
  }
};

// UPDATE CAT
const updateCatController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageUrl } = req.body;
    const updateCategory = await categoryModel.findByIdAndUpdate(id, {title, imageUrl}, {new:true}) 
    if(!updateCategory){
      return res.status(500).send({
        success:false,
        message: 'No Category Found'
      })
    }
    res.status(200).send({
      success: true,
      message: 'Category Updated Successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in update cat API",
      error,
    });
  }
};

const deleteCatController = async (req, res) => {
  try {
    const {id} = req.params
    if(!id){
      return res.status(500).send({
        success: false,
        message: 'Please Provide Category ID',
      })
    }
   const category = await categoryModel.findById(id)
   if(!category) {
    return res.status(500).send({
      success: false,
      message: 'No Category Found with this id'
    })
   }
   await categoryModel.findByIdAndDelete(id)
   res.status(200).send({
    success: true,
    message: 'Category Deleted Successfully',
   });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in delete Cat API",
      error,
    });
    
  }
};

module.exports = {
  createCatController,
  getAllCatController,
  updateCatController,
  deleteCatController,
};
