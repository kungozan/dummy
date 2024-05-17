import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    method: req.method,
    headers: req.headers,
    query: req.query,
    url: req.url,
  });
}