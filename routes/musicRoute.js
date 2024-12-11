import express from "express";
import {
  getAllMusic,
  getMusicById,
  postMusic,
  updateMusicById,
  deleteMusicById,
} from "../controller/musicController.js";

const router = express.Router();

router.get("/", getAllMusic);
router.get("/:id", getMusicById);
router.post("/", postMusic);
router.put("/:id", updateMusicById);
router.delete("/:id", deleteMusicById);

export default router;
