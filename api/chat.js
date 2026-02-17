export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Método não permitido" });
  }

  const { message } = req.body;

  return res.status(200).json({
    reply: "Recebi: " + message
  });
}
