const Portfolio = require("../models/portfolio.model");

/* =========================
   CREATE PORTFOLIO
========================= */
exports.createPortfolio = async (req, res) => {
  try {
    const { category } = req.body;

    if (!category) {
      return res.status(400).json({
        message: "Category is required",
      });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        message: "At least one image is required",
      });
    }

    // Handle multiple images
    const images = req.files
      .map((file) => {
        if (file.secure_url) return file.secure_url;
        if (file.path) return file.path;
        return null;
      })
      .filter(Boolean);

    const portfolio = new Portfolio({
      category,
      images,
    });

    await portfolio.save();

    return res.status(201).json({
      success: true,
      message: "Portfolio created successfully",
      portfolio,
    });
  } catch (error) {
    console.error("CREATE PORTFOLIO ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to create portfolio",
    });
  }
};

/* =========================
   GET ALL PORTFOLIO
========================= */
exports.getAllPortfolio = async (req, res) => {
  try {
    const portfolios = await Portfolio.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: portfolios.length,
      data: portfolios,
    });
  } catch (error) {
    console.error("GET PORTFOLIO ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch portfolio",
    });
  }
};

/* =========================
   DELETE PORTFOLIO
========================= */
exports.deletePortfolio = async (req, res) => {
  try {
    const { id } = req.params;

    const portfolio = await Portfolio.findByIdAndDelete(id);

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Portfolio deleted successfully",
    });
  } catch (error) {
    console.error("DELETE PORTFOLIO ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete portfolio",
    });
  }
};

/* =========================
   UPDATE PORTFOLIO
========================= */
exports.updatePortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    const { category } = req.body;

    const portfolio = await Portfolio.findById(id);

    if (!portfolio) {
      return res.status(404).json({
        message: "Portfolio not found",
      });
    }

    if (category) portfolio.category = category;

    // Add new images (append, not replace)
    if (req.files && req.files.length > 0) {
      const newImages = req.files
        .map((file) => {
          if (file.secure_url) return file.secure_url;
          if (file.path) return file.path;
          return null;
        })
        .filter(Boolean);

      portfolio.images = [...portfolio.images, ...newImages];
    }

    await portfolio.save();

    return res.status(200).json({
      success: true,
      message: "Portfolio updated successfully",
      portfolio,
    });
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update portfolio",
    });
  }
};
