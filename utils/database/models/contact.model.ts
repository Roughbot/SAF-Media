import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      min: 10,
    },
    company: {
      type: String,
      required: false,
    },
    phonenumber: {
      type: Number,
      required: false,
    },
    message: {
      type: String,
      required: true,
      min: 6,
    },
  },
  { timestamps: true }
);

const Contact =
  mongoose.models?.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
