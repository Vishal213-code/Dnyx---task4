import express from "express";
import Note from "../models/Note.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Notes API Running");
});

// Create Note
router.post("/notes", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description required"
      });
    }

    const note = new Note({
      title,
      description
    });

    const savedNote = await note.save();

    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Notes
router.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;