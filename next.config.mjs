/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apex4-production.s3.eu-west-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
