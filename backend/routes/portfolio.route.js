const express = require("express");
const router = express.Router();

const {
  createPortfolio,
  getAllPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolio.controller");

const multer = require("multer");

const storage = require("../config/storage");
const upload = multer({ storage });

// CREATE
router.post("/", upload.single("image"), createPortfolio);

// GET ALL
router.get("/", getAllPortfolio);

// UPDATE
router.put("/:id", upload.single("image"), updatePortfolio);

// DELETE
router.delete("/:id", deletePortfolio);

module.exports = router;
