/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "blog.flicks.co.nz",
      "randomuser.me",
      "i.pinimg.com",
      "tfrnorthcyprus.files.wordpress.com",
    ],
  },
};

module.exports = nextConfig;
