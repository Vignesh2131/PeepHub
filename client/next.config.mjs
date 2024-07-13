/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "w7.pngwing.com",
      },
    ],
  },
};

export default nextConfig;
