/** @type {import('next').NextConfig} */

const nextConfig = {
    compress: true,
    reactStrictMode: true,
    output: 'standalone',
    experimental: {
        serverActions: true,
        serverComponents: true,
        concurrentFeatures: true,
    },    
    trailingSlash: false,
    env: {
        BASE_URL: process.env.BASE_URL,
    },
};

module.exports = nextConfig;
