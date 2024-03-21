/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.externals = config.externals || [];
      config.externals.push(
        "@aws-sdk/client-s3",
        "@aws-sdk/s3-request-presigner"
      );
    }

    return config;
  },
};

export default nextConfig;
