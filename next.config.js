/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function () {
    return {
      '/': { page: '/home' },
    };
  },
}

module.exports = nextConfig
