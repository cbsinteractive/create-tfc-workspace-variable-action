module.exports = {
  // The default tag format includes a "v" prefix
  tagFormat: "${version}",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/git",
    "@semantic-release/github",
  ],
  branches: ["v1"],
};
