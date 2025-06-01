import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "uploadthing.com", // optional: if you're also using it
      "utfs.io"          // ✅ allow images from utfs.io
    ]
  }
};

export default nextConfig;
