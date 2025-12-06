import express from "express";

const app = express();
app.use(express.json());
app.post("/api/sort", (req, res) => {
  const { numbers } = req.body;

  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: "enter 'numbers' array" });
  }

  res.json({ sorted: numbers.sort((a, b) => b - a) });
});

export default app;
