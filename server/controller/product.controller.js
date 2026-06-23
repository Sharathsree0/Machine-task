const Product = require("../models/product.model.js");
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 6,
      search,
      category,
    } = req.query;

    let query = {};

    if (search) {
      query.name = {
        $regex: search,
        $options: "i",
      };
    }

    if (category) {
      query.category = category;
    }

    const skip = (page - 1) * limit;

    const products = await Product.find(query)
      .skip(skip)
      .limit(Number(limit));

    const totalProducts =
      await Product.countDocuments(query);

    res.status(200).json({
      success: true,
      totalProducts,
      currentPage: Number(page),
      totalPages: Math.ceil(
        totalProducts / limit
      ),
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Product.distinct(
      "category"
    );

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  getCategories,
  deleteProduct,
};