import express from "express";

const app = express();

app.use(express.json());
app.post("/api/sort", (req, res) => {
  const numbers = req.body.numbers;

  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: "enter 'numbers' array" });
  }

  const sorted = numbers.sort((a, b) => b - a);
  return res.json({ sorted });
});

app.get("/", (req, res) => {
  res.send("Sort API is running. Use POST /api/sort");
});

export default app;
