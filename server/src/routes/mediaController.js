const express = require("express");
const {
  getMedias,
  addMedia,
  updatemedia,
  deleteMedia,
} = require("../cotrollers/mediaController");

const router = express.Router();

router.get("/get-medias", getMedias);
router.post("/add-media", addMedia);
router.patch("/update-media/:id", updatemedia);
router.delete("/delete-media/:id", deleteMedia);
module.exports = router;
