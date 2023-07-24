/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: false,
  },
  output: "standalone",
};

module.exports = nextConfig
