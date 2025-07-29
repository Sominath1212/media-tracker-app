const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getMedias = (req, res) => {};
const updatemedia = (req, res) => {};
const deleteMedia = (req, res) => {};
const addMedia = (req, res) => {};

module.exports = {
  addMedia,
  deleteMedia,
  updatemedia,
  getMedias,
};
