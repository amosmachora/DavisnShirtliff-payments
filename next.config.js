/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/subscribe",
        destination: "http://144.126.194.173/api/subscribe",
      },
    ];
  },
};

module.exports = nextConfig;
