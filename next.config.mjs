/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com"],
    basePath: "/my-portfolio",
    output: "export",
    reactStrictMode: true,
  }
};

export default nextConfig;
