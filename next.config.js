/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // Ensure images are configured if external domains are needed later, but for now placeholders are local.
};

module.exports = nextConfig;
