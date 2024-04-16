//const ModelResponse = require("../models/Blog");
import { ModelResponse } from "../models/blog";
export const getAllBlogs = async () => {
  return await ModelResponse.find();
};

export const createBlog = async (blog: any) => {
  return await ModelResponse.create(blog);
};
export const getBlogById = async (id: any) => {
  return await ModelResponse.findById(id);
};

export const updateBlog = async (id: any, blog: any) => {
  return await ModelResponse.findByIdAndUpdate(id, blog);
};

export const deleteBlog = async (id: any) => {
  return await ModelResponse.findByIdAndDelete(id);
};
