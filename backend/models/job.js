const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    companyLogo: {
      type: String,
    },
    briefIntro: {
      type: String,
    },
    jobTitle: { type: String },
    subDescription: { type: String },
    fullDescription:{type: String},
    jobLocation: {
      type: String,
    },
    aboutCompany: {
      type: String,
    },
    task: {
      type: Array,
      default: [
        "Magna cupidatat labore esse sit commodo nulla magna duis reprehenderit ex.",
        "Commodo qui veniam amet laborum ea occaecat minim elit duis aliquip est pariatur.",
        "Ullamco ipsum est incididunt reprehenderit qui consectetur proident excepteur ut et ad do deserunt.",
      ],
    },

    requirement: {
      type: Array,
      default: [
        "Incididunt sunt sit nulla anim mollit anim reprehenderit.",
        "Et nulla aute deserunt elit adipisicing dolore voluptate cillum cillum.",
        "Id sint dolore quis veniam aute.",
        "Mollit occaecat ex occaecat adipisicing esse ad.",
        "Laborum enim occaecat adipisicing velit magna pariatur aute veniam do.",
        "Excepteur ullamco elit culpa pariatur fugiat proident voluptate culpa pariatur pariatur non.",
        "Duis voluptate laborum labore commodo in reprehenderit cupidatat exercitation et voluptate fugiat ea dolor enim.",
      ],
    },

    benefits: {
      type: String,
      default: [
        "mollit incididunt velit commodo sit labore",
        "anim nulla proident nostrud cupidatat occaecat",
        "aute ex ex ut ipsum reprehenderit",
        "et elit deserunt ipsum tempor sit",
        "voluptate id ullamco fugiat veniam duis",
        "aute ullamco ullamco exercitation velit sunt",
      ],
    },
  },
  { timestamps: true }
);

jobSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

jobSchema.set("toJSON", {
  virtuals: true,
});
exports.Job = mongoose.model("Job", jobSchema);
