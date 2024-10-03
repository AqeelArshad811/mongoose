require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// const { Schema } = mongoose;
const server = express();
const productRouter = require("./routers/product");
const userRouter = require("./routers/user");
console.log(process.env.DB_PASSWORD);
// database connection

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommress");
  mongodb://
  console.log("database connected");
}



// body parser
server.use(express.json());
server.use(morgan("default"));
server.use(express.static("public"));
server.use("/", productRouter.router);
server.use("/", userRouter.router);

server.listen(8080, () => {
  console.log("server started");
});
