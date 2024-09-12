/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com"],
  },
  basePath: process.env.NODE_ENV === "production" ? "/my-portfolio" : "",
  // output: "export",
  // reactStrictMode: true,
};

export default nextConfig;
