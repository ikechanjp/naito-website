import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath: '/naito-website',
  assetPrefix: '/naito-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
