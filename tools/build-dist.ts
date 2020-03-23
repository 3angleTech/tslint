import { copySync, ensureDirSync, realpathSync, rmdirSync } from 'fs-extra';
import { basename, join } from 'path';

// NOTE: Paths SHOULD be relative to the project root.
const SRC_REL_PATH: string = './src/';
const DIST_REL_PATH: string = './dist/';
const EXTRA_FILES_LIST: string[] = [
  './README.md',
  './LICENSE.txt',
];

function main(): void {
  rmdirSync(DIST_REL_PATH, { recursive: true });
  ensureDirSync(DIST_REL_PATH);
  const DIST_DIR: string = realpathSync(DIST_REL_PATH);

  const SRC_DIR: string = realpathSync(SRC_REL_PATH);
  copySync(SRC_DIR, DIST_DIR, { recursive: true });
  EXTRA_FILES_LIST.forEach((fileRelPath: string): void => {
    const fileAbsPath: string = realpathSync(fileRelPath);
    copySync(fileAbsPath, join(DIST_DIR, basename(fileAbsPath)));
  });
}

// Execute the main script function.
try {
  main();
  process.exit(0);
} catch (err) {
  if ('message' in err) {
    console.error(err.message);
  }
  if ('originalError' in err) {
    console.error(err.originalError);
  }
  process.exit(1);
}
