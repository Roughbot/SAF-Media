import aws from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const accessKeyId = "AKIA2UC3DFKQ5HS6WVR5";
const secretAccessKey = "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";
const region = "ap-south-1";
const bucketName = "saf-media-images";

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

export async function uploadFile(fileName: string) {
  const params = {
    Bucket: bucketName,
    Key: fileName,
  };

  const uploadURL = await s3.getSignedUrlPromise("putObject", params);

  return uploadURL;
}
