# tslintConfig

TypeScript Linting libraries created and maintained by [3angleTech](www.3angle.tech).

## Installation

```
npm install @3angletech/tslint --save-dev
```

## Usage

This library contains linting rules for TypeScript, for Angular and for styling.

To use the TypeScript rules you need to add in `tslint.json`

```
{
  "extends": "@3angletech/tslint/ts"
}
```

or if you want to use both

```
{
  "extends": [
    "@3angletech/tslint/ts",
    "@3angletech/tslint/angular",
    "@3angletech/tslint/styles"
  ]
}

```

## Development

To distribute the library to npmjs:

```bash
$ npm publish --access public
```

## License

Apache 2.0