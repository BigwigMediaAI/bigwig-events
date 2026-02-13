const Portfolio = require("../models/portfolio.model");

/* =========================
   CREATE PORTFOLIO
========================= */
exports.createPortfolio = async (req, res) => {
  try {
    const { title, category } = req.body;

    // 🔒 Validation
    if (!title || !category) {
      return res.status(400).json({
        message: "Title and category are required",
      });
    }

    // 🔒 Image Handling (Same as testimonial)
    let image = null;

    if (req.file) {
      if (req.file.secure_url) {
        image = req.file.secure_url;
      } else if (req.file.path) {
        image = req.file.path;
      } else {
        return res.status(400).json({
          message: "Image upload failed (no path or URL)",
        });
      }
    } else {
      return res.status(400).json({
        message: "Portfolio image is required",
      });
    }

    const portfolio = new Portfolio({
      title,
      category,
      image,
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
    const { title, category } = req.body;

    const portfolio = await Portfolio.findById(id);

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    // Update fields
    if (title) portfolio.title = title;
    if (category) portfolio.category = category;

    // Image update (same logic)
    if (req.file) {
      if (req.file.secure_url) {
        portfolio.image = req.file.secure_url;
      } else if (req.file.path) {
        portfolio.image = req.file.path;
      }
    }

    await portfolio.save();

    return res.status(200).json({
      success: true,
      message: "Portfolio updated successfully",
      portfolio,
    });
  } catch (error) {
    console.error("UPDATE PORTFOLIO ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update portfolio",
    });
  }
};
