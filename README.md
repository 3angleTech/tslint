# tslintConfig

TypeScript Linting libraries created and maintained by [3angleTech](www.3angle.tech).


## Installation

    npm install @3angletech/tslint --save-dev


## Usage

This library contains linting rules for TypeScript, for Angular and for styling.

To use the TypeScript rules, install required peer dependencies and update `tslint.json` to include:

    {
      "extends": [
        "@3angletech/tslint/ts",
        "@3angletech/tslint/angular"
      ]
    }

To use the StyleLint rules, install required peer dependencies and update `.stylelintrc` to include:

    {
      "extends": [
        "@3angletech/tslint/styles"
      ]
    }

To publish a new version:

    npm run build
    npm publish dist/
