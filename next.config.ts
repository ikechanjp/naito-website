import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  ...(isGitHubPages && {
    basePath: '/naito-website',
    assetPrefix: '/naito-website',
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
