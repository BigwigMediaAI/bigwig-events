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
router.post("/", upload.array("images", 10), createPortfolio);

// GET ALL
router.get("/", getAllPortfolio);

// UPDATE
router.put("/:id", upload.array("images", 10), updatePortfolio);

// DELETE
router.delete("/:id", deletePortfolio);

module.exports = router;
