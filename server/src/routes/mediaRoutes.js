const express = require("express");
const {
  getMedias,
  addMedia,
  updatemedia,
  deleteMedia,
  getMedia,
} = require("../cotrollers/mediaController");

const router = express.Router();
router.get("/get-media/:id",getMedia)
router.get("/get-medias", getMedias);
router.post("/add-media", addMedia);
router.patch("/update-media/:id", updatemedia);
router.delete("/delete-media/:id", deleteMedia);
module.exports = router;
