/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "saf-media-images.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@aws-sdk"],
  },
};

export default nextConfig;
