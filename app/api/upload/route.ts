import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import path from "path";

const readFile = (req: NextApiRequest, saveLocally?: boolean) => {
  if (saveLocally) {
    const image = req.body.image;
    console.log(image);
    console.log(req.body);
  }
};

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log("reached here");

  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/images"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/images"));
  }
  readFile(req, true);
  res.json({ done: "ok" });
}
