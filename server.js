const mongoose = require("mongoose");
const app = require("./app");

const { DB_KEY } = process.env;
run();
async function run() {
  try {
    await mongoose
      .connect(DB_KEY)
      .then(() => console.log("Database connection successful"));
      app.listen(3000);
  } catch (err) {
    console.error("Something went wrong");
    process.exit(1);
  }
}