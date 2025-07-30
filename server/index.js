const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mediaRoutes = require("./src/routes/mediaRoutes");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/media", mediaRoutes);
app.listen(process.env.PORT, () => {
  console.log(`server is started \n http://localhost:${process.env.PORT}`);
});
