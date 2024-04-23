import express from "express";
import UserResume from "../models/userResume";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const userDetails = req.body;

    // JSON Validation
    const expectedKeys = [
      "job_title",
      "first_name",
      "last_name",
      "email",
      "phone",
      "country",
      "city",
      "address",
      "postal_code",
      "experience",
      "school",
      "degree",
      "start_date",
      "end_date",
      "school_city",
      "education_description",
      "social_links",
      "skills",
      "hobbies",
    ];
    const receivedKeys = Object.keys(userDetails);
    const missingKeys = expectedKeys.filter(
      (key) => !receivedKeys.includes(key)
    );
    if (missingKeys.length > 0) {
      return res
        .status(400)
        .send({ message: `Missing keys: ${missingKeys.join(", ")}` });
    }

    const userResume = await UserResume.create(userDetails);

    res.status(201).send(userResume);
  } catch (err) {
    console.log(err);
    res.status(501).send({ message: err });
  }
});

export default router;
