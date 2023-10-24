const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config({ path: "config.env" });

// connect with db
mongoose
  .connect(process.env.DB_URI)
  .then((conn) => {
    console.log(`Database connected : ${conn.connection.host}`);
  })
  .catch((err) => {
    console.error(`Database Error : ${err}`);
    process.exit(1); // Stop node App
  });

// App express
const app = express();

//middleware Before the routes
app.use(express.json()); // to parsing req.body

//if I want to use morgan only in developement mode
if (process.env.NODE_ENV === "developement") {
  app.use(morgan("dev")); // morgan middelware for logger
  console.log(`mode: ${process.env.NODE_ENV}`);
}

// test DB
// 1- Create Schema
const categorySchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

// 2- Create Model
const CategoryModel = mongoose.model("Category", categorySchema);

//Routes
app.post("/", (req, res) => {
  const name = req.body.name;
  console.log(req.body);
  const newCategory = new CategoryModel({ name });
  newCategory
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
});
app.get("/", (req, res) => {
  res.send("<h1> API V1</h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {
  console.log(`App is running on port ${PORT}`);
});
