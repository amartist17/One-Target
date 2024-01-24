const mongoose = require("mongoose");

const studentFunnelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
    phone: {
      type: String,
      required: true
    },

    date: {
      type: Date,
      default: Date.now,
      required: true
    }
  });

module.exports = mongoose.model("StudentFunnel", studentFunnelSchema);
