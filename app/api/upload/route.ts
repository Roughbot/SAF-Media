import { NextRequest, NextResponse } from "next/server";
import multer from "multer";
import path from "path";
import fs from "fs";

// Ensure the uploads directory exists
const uploadsDirectory = path.join(process.cwd(), "public", "uploads");
if (!fs.existsSync(uploadsDirectory)) {
  fs.mkdirSync(uploadsDirectory, { recursive: true });
}

// Configure multer to store files in the uploads directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Multer middleware wrapper
const runMiddleware = (req: any, res: any, fn: any) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const formData = await new Promise<any>((resolve, reject) => {
    upload.single("image")(req as any, {} as any, (err: any) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve((req as any).file);
      }
    });
  });

  if (!formData) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const filePath = `/uploads/${formData.filename}`;
  return NextResponse.json({
    message: "Image uploaded successfully",
    filePath,
  });
}
