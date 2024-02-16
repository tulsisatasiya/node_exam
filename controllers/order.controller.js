const { orderService } = require("../services");


//add
const addOrder = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    // const orderExist = await orderService.getOrdersByUserId(body.userId);

    // if (orderExist) {
    //   throw new Error("Order already exists");
    // }

    const order = await orderService.addOrder(body);

    if (!order) {
      throw new Error("Something went wrong");
    }

    res.status(201).json({
      message: "Order created successfully",
      data: order,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//get
const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();

    res.status(200).json({
      success: true,
      message: "Successfully retrieved all orders",
      data: {
        orders,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//delete
const deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;

    const order = await orderService.deleteOrder(id);

    if (!order) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({
      message: "Order deleted successfully",
      data: order,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//update
const updateOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    console.log(id, body);

    // const orderExist = await orderService.getOrdersByUserId(body.userId);

    // if (orderExist) {
    //   throw new Error("Order already exists");
    // }

    const order = await orderService.updateOrder(id, body);

    res.status(200).json({
      message: "Order updated successfully",
      data: order,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { addOrder, getAllOrders, deleteOrder, updateOrder };
