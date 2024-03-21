import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";

dotenv.config();

const region = "ap-south-1";
const bucketName = "saf-media-images";
const accessKeyId = "AKIA2UC3DFKQ5HS6WVR5";
const secretAccessKey = "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";

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export async function uploadFile(fileName: string) {
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: fileName,
  });

  const uploadURL = await getSignedUrl(s3Client, command, { expiresIn: 60 });

  return uploadURL;
}

export async function deleteFile(fileName: string) {
  const command = new DeleteObjectCommand({
    Bucket: bucketName,
    Key: fileName,
  });

  try {
    const data = await s3Client.send(command);
    console.log("successfully deleted file from aws");
  } catch (err) {
    console.log("error", err);
  }
}
