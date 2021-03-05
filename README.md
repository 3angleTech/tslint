# tslintConfig

TypeScript Linting libraries created and maintained by [3angleTech](www.3angle.tech).


## Installation

    # For Angular v11 projects.
    npm install @3angletech/tslint@2 --save-dev

    # For Angular v10 or non-Angular projects.
    npm install @3angletech/tslint@1 --save-dev


## Usage

This library contains linting rules for TypeScript, for Angular and for styling.

To use the TypeScript rules, update `tslint.json` to include:

    {
      "extends": [
        "@3angletech/tslint/ts",
        "@3angletech/tslint/angular"
      ]
    }

To use the StyleLint rules, update `.stylelintrc` to include:

    {
      "extends": [
        "@3angletech/tslint/styles"
      ]
    }

To publish a new version:

    npm run build
    npm publish dist/
