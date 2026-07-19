import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.basemaps.cartocdn.com",
      },
    ],
  },
};

export default nextConfig;
