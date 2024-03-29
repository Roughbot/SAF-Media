import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";

dotenv.config();

const region = process.env.NEXT_PUBLIC_AWS_REGION as string;
const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME as string;
const accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string;
const secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string;

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export async function uploadFile(fileName: string) {
  if (!accessKeyId || !secretAccessKey) {
    throw new Error("AWS credentials not found");
  }

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: fileName, // Add the 'Key' property with the value of the fileName
    Body: fileName, // Upload the converted image
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
