const { Application } = require("../models/applications");
const express = require("express");
const router = express.Router();

//get all applications in the system
router.get(`/`, async (req, res) => {
  const applicationList = await Application.find();

  if (!applicationList) {
    res.status(500).json({ success: false });
  }
  res.send(applicationList);
});

//get one application by id
router.get("/:id", async (req, res) => {
  const application = await Application.findById(req.params.id);

  if (!application) {
    res
      .status(500)
      .json({ message: "The application with the given ID was not found." });
  }
  res.status(200).send(application);
});

//create a application
router.post(`/`, async (req, res) => {
  let application = new Application({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    coverLetter: req.body.coverLetter
  });

  application = await application.save();
  if (!application) return res.status(404).send("application Cannot Be Created!");

  res.send(application);
});

//update a application
router.put("/:id", async (req, res) => {
  const application = await Application.findByIdAndUpdate(
    req.params.id,
    {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    coverLetter: req.body.coverLetter,
    },
    { new: true }
  );

  if (!application) return res.status(400).send("the application cannot be created!");

  res.send(application);
});

//delete a application
router.delete("/:id", (req, res) => {
  Application.findByIdAndRemove(req.params.id)
    .then((application) => {
      if (application) {
        return res
          .status(200)
          .json({ success: true, message: "the application is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "application not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

module.exports = router;
