/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    serverActions: false, // ← これを追加！
  },
  trailingSlash: true,
};

module.exports = nextConfig;
