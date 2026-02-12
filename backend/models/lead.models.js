const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    // ===== Customer Information =====
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    // ===== Event Information =====
    eventType: {
      type: String,
      trim: true,
    },

    eventDate: {
      type: Date,
    },

    eventLocation: {
      type: String,
      trim: true,
    },

    message: {
      type: String,
      trim: true,
    },
    verified: { type: Boolean, default: false },
    marked: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  },
);

module.exports = mongoose.model("Lead", leadSchema);
