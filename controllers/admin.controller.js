const { adminService } = require("../services");

//add
const addAdmin = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const AdminExist = await adminService.getAdminByName(body.admin);
    
    if (AdminExist) {
      throw new Error("Admin already exist");
    }

    const Admin = await adminService.addAdmin(body);

    if (!Admin) {
      throw new Error("something went wrong");
    }

    res.status(201).json({
      message: "Admin Created success",
      data: Admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//get
const getAdmin = async (req, res) => {
    try {
         const Admin = await adminService.getAllAdmin(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All Admin list Get.....",
              data: {
                Admin,

              }
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}

//delete
const deleteAdmin = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const Admin = await adminService.deleteAdmin(id);
    if (!Admin) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "Admin delete success",
      data: Admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//update
const updateAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    console.log(id, body);

   
    const AdminExist = await adminService.getAdminByName(body.admin);
    
    if (AdminExist) {
      throw new Error("Admin already exist");
    }

    const Admin = await adminService.updateAdmin(id, body);

    res.status(200).json({
      message: "Admin updated success",
      data: Admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = { addAdmin, getAdmin, deleteAdmin, updateAdmin };