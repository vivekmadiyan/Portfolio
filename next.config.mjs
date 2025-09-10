/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Ignore ESLint errors during Vercel builds
    ignoreDuringBuilds: true,
  },
  images: {
    // Allow external image domains if needed
    domains: ["your-image-domain.com"],
  },
  compiler: {
    // Optional: enables SWC transforms for styled-components etc.
  },
};

export default nextConfig;
