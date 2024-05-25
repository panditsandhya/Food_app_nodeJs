const testUserController = (req,res) => {
  try {
    res.status(200).send({
      success: true,
      message: "test user Data API"
    });
  } catch (error) {
    console.log("error In Test API", error);
    
  }
}

module.exports = { testUserController };