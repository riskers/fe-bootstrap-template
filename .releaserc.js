const hooks = require('semantic-release-monorepo-hooks');
const output = hooks();

module.exports = {
  extends: 'semantic-release-monorepo',
  branches: ['main', { name: 'beta', prerelease: true }, { name: 'alpha', prerelease: true }],
  monorepo: {
    analyzeCommits: ['@semantic-release/commit-analyzer'],
    generateNotes: ['@semantic-release/release-notes-generator'],
  },
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    {
      path: '@semantic-release/git',
      message: 'chore(' + output.package + '): release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    },
  ],
  publish: ['@semantic-release/npm'],
  verifyConditions: ['@semantic-release/npm', '@semantic-release/git'],
  // plugins: [
  //   '@semantic-release/commit-analyzer',
  //   '@semantic-release/release-notes-generator',
  //   [
  //     '@semantic-release/changelog',
  //     {
  //       changelogFile: 'docs/CHANGELOG.md',
  //     },
  //   ],
  //   '@semantic-release/npm',
  //   [
  //     '@semantic-release/git',
  //     {
  //       assets: ['package.json', 'docs/CHANGELOG.md'],
  //       message: 'chore(release): ${nextRelease.version} [skip ci]',
  //     },
  //   ],
  //   '@semantic-release/github',
  // ],
};
