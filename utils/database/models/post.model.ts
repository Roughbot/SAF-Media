import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
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
    required: false,
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
});

const Blog = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
