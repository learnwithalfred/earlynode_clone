const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    coverLetter: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

applicationSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

applicationSchema.set("toJSON", {
  virtuals: true,
});
exports.Application = mongoose.model("Application", applicationSchema);
