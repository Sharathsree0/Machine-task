const uploadImage = async (req, res) => {
  try {
    console.log("FILE:", req.file);

    res.status(200).json({
      success: true,
      imageUrl: req.file.path,
    });
  } catch (error) {
    console.log("UPLOAD ERROR:");
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { uploadImage};