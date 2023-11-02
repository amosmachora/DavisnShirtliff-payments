/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/subscribe/:path*",
        destination:
          "http://144.126.194.173/api/subscribe/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
