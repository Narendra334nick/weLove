// next.config.mjs

/** @type {import('next').NextConfig} */

const isGithubPages = true;
const repo = 'weLove'; // your GitHub repo name
const nextConfig = {
  output: 'export',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  basePath: isGithubPages ? `/${repo}` : '',
  trailingSlash: true,
};


export default nextConfig;