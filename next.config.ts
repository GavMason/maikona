import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // For static export to Cloudflare Pages
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
