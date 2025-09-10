/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // <-- ignore lint errors in production
  },
};

export default nextConfig;
