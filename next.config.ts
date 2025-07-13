/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  // Required for database connections to work in Server Components
  experimental: {
    serverComponentsExternalPackages: ["@neondatabase/serverless"],
  },
};

module.exports = nextConfig;
