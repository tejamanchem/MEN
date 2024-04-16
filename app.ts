import express from "express";
import { router as blogRouter } from "./routes/blogRoutes";
import { main } from "./mongoConnection";
import mongoose from "mongoose";
const app = express();

app.use(express.json());
main().then(()=>{
    console.log('done')
})
app.get("/", (req, res) => {
  console.log("In server");
  res.send({
    name: `MEN(Mongo-Express-Nodejs)`,
    version: 1.2,
  });
});

app.use("/api/blogs", blogRouter);
app.listen(5000, () => {
  console.log("server running on port 5000!!!");
});

export default app;
