/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/.well-known/farcaster.json',
        destination: '/farcaster.json',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
