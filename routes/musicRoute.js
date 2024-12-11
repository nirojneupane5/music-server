import express from "express";
import {
  getAllMusic,
  getMusicById,
  postMusic,
  updateMusicById,
  deleteMusicById,
} from "../controller/musicController.js";

const router = express.Router();

router.get("/music", getAllMusic);
router.get("/music/:id", getMusicById);
router.post("/music", postMusic);
router.put("/music/:id", updateMusicById);
router.delete("/music/:id", deleteMusicById);

export default router;
