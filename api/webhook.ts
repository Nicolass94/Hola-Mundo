import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Webhook recibido:", req.body);
  res.status(200).json({ success: true });
}