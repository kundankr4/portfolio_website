/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/portfolio_website",
  assetPrefix: "/portfolio_website/",
};

module.exports = nextConfig;
