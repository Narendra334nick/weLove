// next.config.mjs

/** @type {import('next').NextConfig} */

const isGithubPages = true;
const repo = 'weLove'; // your GitHub repo name
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath:"/weLove"
};


export default nextConfig;