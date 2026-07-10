/** @type {import('next').NextConfig} */
// Static export for GitHub Pages (organisation root domain: checkjeijzer.github.io).
// NO basePath/assetPrefix — this is a root-domain org page, not user.github.io/project.
const nextConfig = {
  output: "export",
  trailingSlash: true, // exports /about -> /about/index.html, served natively by GH Pages
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
