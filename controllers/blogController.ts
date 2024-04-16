const blogService = require("../services/BlogService");

export const getAllBlogs = async (req: any, res: any) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.json({ data: blogs, status: "success" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const createBlog = async (req: any, res: any) => {
  try {
    const blog = await blogService.createBlog(req.body);
    res.json({ data: blog, status: "success" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getBlogById = async (req: any, res: any) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateBlog = async (req: any, res: any) => {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body);
    res.json({ data: blog, status: "success" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteBlog = async (req: any, res: any) => {
  try {
    const blog = await blogService.deleteBlog(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
