export default function handler(req: any, res: any) {
  const body = req.body;
  if (!body.first || !body.last) {
    return res.status(400).json({ data: "First or last name not found" });
  }
  res.status(200).json({ data: `${body.first} ${body.last}` });
}
