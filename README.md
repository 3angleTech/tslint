# tslintConfig

TypeScript Linting libraries created and maintained by [3angleTech](www.3angle.tech).

## Installation

    npm install @3angletech/tslint --save-dev


## Usage

This library contains linting rules for TypeScript, for Angular and for styling.

To use the TypeScript rules, update `tslint.json` to include:

```json
{
  "extends": [
    "@3angletech/tslint/ts",
    "@3angletech/tslint/angular"
  ]
}
```

To use the StyleLint rules, update `.stylelintrc` to include:

```json
{
  "extends": [
    "@3angletech/tslint/styles"
  ]
}
```
