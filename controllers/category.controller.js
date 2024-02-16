const { categoryService } = require("../services");

//add
const addcategoray = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const categoryExist = await categoryService.getCategoryByName(body.category_name);
    
    if (categoryExist) {
      throw new Error("categoray already exist");
    }

    const categoray = await categoryService.addCategory(body);

    if (!categoray) {
      throw new Error("something went wrong");
    }

    res.status(201).json({
      message: "categoray Created success",
      data: categoray,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//get
const getcategoray = async (req, res) => {
    try {
         const categoray = await categoryService.getAllCategories(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All categoray list Get.....",
              data: {
                categoray,

              }
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}

//delete
const deletecategoray = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const categoray = await categoryService.addCategory(id);
    if (!categoray) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "categoray delete success",
      data: categoray,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//update
const updatecategoray = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    console.log(id, body);

   
    const categoryExist = await categoryService.getCategoryByName(body.category_name);
    
    if (categoryExist) {
      throw new Error("categoray already exist");
    }

    const category = await categoryService.updateCategory(id, body);

    res.status(200).json({
      message: "category updated success",
      data: category,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { addcategoray, getcategoray, deletecategoray, updatecategoray };
