# opensource-fe-template

## PNPM workspace

use PNPM workspace monorepo

## RELEASE

use semantic-release

## Lint and Format

* [ESLint](https://eslint.org/): [config](./.eslintrc.js)
* [Prettier](https://prettier.io/): [config](./.prettierrc.js)

## Limit package management

Limit the types of package management Strictly (default [PNPM](https://pnpm.io/)).

If you want to modify, you can change the `engines` field in [package.json](./package.json).

## Husky

If [husky](https://github.com/typicode/husky) not works:

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

> reference [stackoverflow](https://stackoverflow.com/questions/8598639/why-is-my-git-pre-commit-hook-not-executable-by-default)

## Commitlint

[commitlint](https://github.com/conventional-changelog/commitlint) will check commit message before you commit.

[rules](./.commitlintrc.js)

## Release NPM package on Github Action

1. Change npm's `name` in [package.json](./package.json).

2. Apply `NPM_TOKEN` and fill in your repo's secrets:

  ![](https://user-images.githubusercontent.com/106944652/184101863-aeac91d9-f0d4-4dc5-a4ca-969372263231.png)

3. Auto publish package by [semantic-release](https://github.com/semantic-release/semantic-release) on [Github Action](./.github/workflows/release.yaml).

## Support Alpha / Beta pre-release

[There](https://www.npmjs.com/package/opensource-fe-template?activeTab=versions) are version history:
![](https://i.imgur.com/mp37kEx.png)

More details: https://github.com/semantic-release/semantic-release/blob/master/docs/recipes/release-workflow/pre-releases.md

