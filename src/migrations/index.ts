import * as migration_20260417_194553 from './20260417_194553';
import * as migration_20260417_222320 from './20260417_222320';
import * as migration_20260419_160233 from './20260419_160233';

export const migrations = [
  {
    up: migration_20260417_194553.up,
    down: migration_20260417_194553.down,
    name: '20260417_194553',
  },
  {
    up: migration_20260417_222320.up,
    down: migration_20260417_222320.down,
    name: '20260417_222320',
  },
  {
    up: migration_20260419_160233.up,
    down: migration_20260419_160233.down,
    name: '20260419_160233'
  },
];
