/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Using remotePatterns instead of domains
    remotePatterns: [
      { hostname: 'images.pexels.com' },
      { hostname: 'firebasestorage.googleapis.com' },
    ],
  },
}

export default nextConfig
