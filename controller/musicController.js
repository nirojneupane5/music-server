import Music from "../models/musicModel.js";

//Route 1: Post music instrument
export const postMusic = async (req, res) => {
  try {
    const music = await Music.create(req.body);
    res.status(200).json(music);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Route 2: Get all music instruments
export const getAllMusic = async (req, res) => {
  try {
    const music = await Music.find();
    res.status(200).json(music);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Route 3: Get music instrument by id
export const getMusicById = async (req, res) => {
  try {
    const music = await Music.findById(req.params.id);
    res.status(200).json(music);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Route 4: Update music instrument by id
export const updateMusicById = async (req, res) => {
  try {
    const music = await Music.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(music);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Route 5: Delete music instrument by id
export const deleteMusicById = async (req, res) => {
  try {
    const music = await Music.findByIdAndDelete(req.params.id);
    res.status(200).json(music);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
