import mongoose from "mongoose";
const schema = mongoose.Schema;

const blogSchema = new schema({
  title: String,
  body: String,
  image: String,
  createdAt: { type: Date, default: Date.now() },
});

export const ModelResponse = mongoose.model("Blog",blogSchema);
