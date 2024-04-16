// import mongoose from "mongoose";
// console.log("---------------------------");

// const mongoC = mongoose
//   .connect("mongodb://localhost:27017/")
//   .then(() => {
//     console.log("Db Connected");
//   })
//   .catch((err: any) => {
//     console.log("Error", err);
//   });
// console.log("*********************************");
// export { mongoC };

import mongoose , { Connection } from "mongoose";

async function connectToDatabase(): Promise<Connection> {
  const MONGODB_URI = "mongodb://127.0.0.1:27017/tejaDb";

  try {
    const connection = await mongoose.connect(MONGODB_URI, 
    //     {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
    ) as any

    console.log("Connected to MongoDB");

    // You can return the connection object if needed
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

// Example usage
export async function main() {
  try {
    const connection = await connectToDatabase();

    // Your application logic here

    // Close the connection when done (optional)
    //await connection.close();
  } catch (error) {
    console.error("Error in main:", error);
  }
}

//main();
