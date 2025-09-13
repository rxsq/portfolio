const isCI = process.env.GITHUB_ACTIONS === "true";

const repoName = process.env.GITHUB_REPOSITORYY?.split("/")[1] ?? "";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (isCI &&
  repoName !== `${process.env.GITHUB_REPOSITORY?.split("/")[0]}.github.io`
    ? `/${repoName}`
    : "");

const nextConfig = {
  output: "export", // write the static HTML to `out` directory
  basePath, // subpath for GitHub pages
  assetPrefix: basePath ? `${basePath}/` : "", // ensure assets load under subpath
  images: { unoptimized: true }, // reuqired for static export
  trailingSlash: true, // helps with GH Pages file paths
};

export default nextConfig;
