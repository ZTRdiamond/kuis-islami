import { Router } from "express";
import utils from "../libs/utils.js";

const router = Router();

router.get("/", async (req, res) => {
  res.json({
    endpoints: ["/random", "/search?id="],
  });
});

router.get("/random", async (req, res) => {
  try {
    if (!global.quiz || !Array.isArray(global.quiz) || global.quiz.length === 0) {
      return res.status(404).json({ error: "No quiz data available" });
    }

    const quiz = utils.randomQuiz(global.quiz);
    res.json(quiz);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/search", async (req, res) => {
  try {
    const id = req.query?.id?.trim();

    if (!id) {
      return res.status(400).json({
        error: "Missing query parameter",
        required: { query: ["id"] },
      });
    }

    const quiz = utils.searchQuiz(id);
    if (!quiz) {
      return res.status(404).json({ error: "No data found" });
    }

    res.json(quiz);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;