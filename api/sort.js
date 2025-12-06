export default async function handler(req, res) {
  const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  const numbers = body.numbers;

  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: "enter 'numbers' array" });
  }

  const sorted = numbers.sort((a, b) => b - a);

  return res.status(200).json({ sorted });
}
