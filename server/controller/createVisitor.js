const Visitor = require("../models/Visitor");

exports.createVisitor = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { name, email, phone, message } = req.body;

    const visitor = await Visitor.create({
      name,
      email,
      phone,
      message,
    });
    return res.status(200).json({
      status: 201,
      message: "Visitor created successfully",
      data: visitor,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
