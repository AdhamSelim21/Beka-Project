import * as migration_20260417_194553 from './20260417_194553';
import * as migration_20260417_222320 from './20260417_222320';
import * as migration_20260419_160233 from './20260419_160233';
import * as migration_20260420_213650 from './20260420_213650';
import * as migration_20260425_182739 from './20260425_182739';
import * as migration_20260426_114713 from './20260426_114713';

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
    name: '20260419_160233',
  },
  {
    up: migration_20260420_213650.up,
    down: migration_20260420_213650.down,
    name: '20260420_213650',
  },
  {
    up: migration_20260425_182739.up,
    down: migration_20260425_182739.down,
    name: '20260425_182739',
  },
  {
    up: migration_20260426_114713.up,
    down: migration_20260426_114713.down,
    name: '20260426_114713'
  },
];
