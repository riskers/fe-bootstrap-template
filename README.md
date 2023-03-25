# opensource-fe-template

**FOR MONOREPO**

## PNPM workspace

use PNPM workspace monorepo

Limit the types of package management Strictly (default [PNPM](https://pnpm.io/)).

If you want to modify, you can change the `engines` field in [package.json](./package.json).

## RELEASE

use [changesets](https://github.com/changesets/changesets)

## Husky + LintStaged

If [husky](https://github.com/typicode/husky) not works:

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

## Lint and Format

* [ESLint](https://eslint.org/): [config](./.eslintrc.js)
* [Prettier](https://prettier.io/): [config](./.prettierrc.js)

> reference [stackoverflow](https://stackoverflow.com/questions/8598639/why-is-my-git-pre-commit-hook-not-executable-by-default)

lint command: `pnpm run -r lint`

## Commitlint

[commitlint](https://github.com/conventional-changelog/commitlint) will check commit message before you commit.

[rules](./.commitlintrc.js)

## Release NPM package on Github Action

1. Change npm's `name` in [package.json](./package.json).

2. Apply `NPM_TOKEN` and fill in your repo's secrets:

  ![](https://user-images.githubusercontent.com/106944652/184101863-aeac91d9-f0d4-4dc5-a4ca-969372263231.png)

3. Auto publish package by [semantic-release](https://github.com/semantic-release/semantic-release) on [Github Action](./.github/workflows/release.yaml).
