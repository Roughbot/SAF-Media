import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { writeFile } from "fs/promises";
import slugify from "slugify";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ error: "No file found" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const timestamp = Date.now();
  const uniqueName = slugify(`${timestamp}-${file.name}`);

  const path = join(process.cwd(), "public/uploads", uniqueName);
  await writeFile(path, buffer);
  console.log(`File uploaded successfully in ${path}`);

  return NextResponse.json({ path: `/uploads/${uniqueName}` });
}
