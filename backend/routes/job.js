const { Job } = require("../models/job");
const express = require("express");
const router = express.Router();

//get all jobs in the system
router.get(`/`, async (req, res) => {
  const jobList = await Job.find();

  if (!jobList) {
    res.status(500).json({ success: false });
  }
  res.send(jobList);
});

//get one job by id
router.get("/:id", async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res
      .status(500)
      .json({ message: "The job with the given ID was not found." });
  }
  res.status(200).send(job);
});

//create a job
router.post(`/`, async (req, res) => {
  let job = new Job({
    companyName: req.body.companyName,
    companyLogo: req.body.companyLogo,
    briefIntro: req.body.briefIntro,
    aboutCompany: req.body.aboutCompany,
    task: req.body.task,
    requirement: req.body.requirement,
    benefits: req.body.benefits,
    jobTitle: req.body.jobTitle,
    subDescription: req.body.subDescription,
    fullDescription: req.body.fullDescription,
    jobLocation: req.body.jobLocation
  });

  job = await job.save();
  if (!job) return res.status(404).send("job Cannot Be Created!");

  res.send(job);
});

//update a job
router.put("/:id", async (req, res) => {
  const job = await Job.findByIdAndUpdate(
    req.params.id,
    {
      companyName: req.body.companyName,
      companyLogo: req.body.companyLogo,
      briefIntro: req.body.briefIntro,
      aboutCompany: req.body.aboutCompany,
      task: req.body.task,
      requirement: req.body.requirement,
      benefits: req.body.benefits,
      jobTitle: req.body.jobTitle,
      subDescription: req.body.subDescription,
      fullDescription: req.body.fullDescription,
      jobLocation: req.body.jobLocation,
    },
    { new: true }
  );

  if (!job) return res.status(400).send("the job cannot be created!");

  res.send(job);
});

//delete a job
router.delete("/:id", (req, res) => {
  Job.findByIdAndRemove(req.params.id)
    .then((job) => {
      if (job) {
        return res
          .status(200)
          .json({ success: true, message: "the job is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "job not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

module.exports = router;
