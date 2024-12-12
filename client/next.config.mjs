// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["ipfs.io", "gateway.pinata.cloud"],
//   },
// };
//
// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gateway.pinata.cloud',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;