const prisma = require("../../generated/prisma");

const db = new prisma.PrismaClient();
const addMedia = async (req, res) => {
  const { title, file, type, director, budget, location, duration, year } =
    req.body;
  try {
    const generatedMedia = await db.media.create({
      data: {
        title,
        image: file,
        type,
        director,
        budget: parseFloat(budget),
        location,
        duration: parseInt(duration),
        year: parseInt(year),
      },
    });
    console.log(generatedMedia);
    res.status(200).json({ message: "Media Added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
const getMedias = async (req, res) => {
  try {
    const medias = await db.media.findMany();
    res.status(200).json({ medias });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
const getMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const medias = await db.media.findFirst({
      where: { id: Number(id) },
    });
    res.status(200).json({ medias });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
const updatemedia = async (req, res) => {
  try {
    const { id } = req.params;

    const updateedMedia = await db.media.update({
      where: { id: Number(id) },
      data: req.body,
    });
    console.log(updateedMedia);
    res.status(200).json({ message: "media updated" });
  } catch (err) {
    console.log(err);

    res.status(500).json({ error: err.message });
  }
};
const deleteMedia = async (req, res) => {
  try {
    const { id } = req.params;
    await db.media.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.log(err);

    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addMedia,
  deleteMedia,
  updatemedia,
  getMedias,
  getMedia,
};
