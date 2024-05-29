import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { unlink } from "fs/promises";
import { decode } from "urlencode";

export async function DELETE(req: NextRequest) {
  const imageName = req.nextUrl.searchParams.get("name");

  if (!imageName) {
    return NextResponse.json(
      { error: "No image name provided" },
      { status: 400 }
    );
  }

  const path = join(process.cwd(), "public/uploads", decode(imageName));
  try {
    await unlink(path);
    console.log(`File deleted successfully from ${path}`);
    return NextResponse.json({ message: `Deleted image ${imageName}` });
  } catch (error) {
    console.error(`Failed to delete file: ${error}`);
    return NextResponse.json(
      { error: "Failed to delete image" },
      { status: 500 }
    );
  }
}
