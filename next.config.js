/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // required for GitHub Pages with next/image
  basePath: process.env.NODE_ENV === "production" ? "/kundan-portfolio": "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/kundan-portfolio/": "",
};

module.exports = nextConfig;