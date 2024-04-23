import mongoose from "mongoose";

const userResumeSchema = new mongoose.Schema(
  {
    job_title: String,
    first_name: String,
    last_name: String,
    email: String,
    phone: Number,
    country: String,
    city: String,
    address: String,
    postal_code: String,
    experience: String,
    school: String,
    degree: String,
    start_date: Date,
    end_date: Date,
    school_city: String,
    education_description: String,
    social_links: String,
    skills: String,
    hobbies: String,
  },
  {
    timestamps: true,
  }
);

const UserResume = mongoose.model("UserResume", userResumeSchema);

export default UserResume;
