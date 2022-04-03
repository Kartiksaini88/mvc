let Book = require("./bookModel");

let mongoose = require("mongoose");

let publicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    publish: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("public", publicationSchema);
