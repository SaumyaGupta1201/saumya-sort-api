export default function handler(req, res) {
  const numbers = req.body.numbers;

  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: "enter 'numbers' array" });
  }

  const sorted = numbers.sort((a, b) => b - a);

  res.status(200).json({ sorted });
}
