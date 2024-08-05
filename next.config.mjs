/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
            {
                hostname: "encrypted-tbn0.gstatic.com",
                protocol: "https"
            },
            {
                hostname: "images.pexels.com",
                protocol: "https"
            },
            {
                hostname: "localhost",
                protocol: "http"
            }
        ]
    }
};

export default nextConfig;
