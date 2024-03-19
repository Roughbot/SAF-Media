import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    content: {
      type: Object,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      required: false,
      default: 0,
    },
    comments: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
