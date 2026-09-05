import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.10.10.205"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
