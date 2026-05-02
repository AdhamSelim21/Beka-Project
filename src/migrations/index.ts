import * as migration_20260417_194553 from './20260417_194553';
import * as migration_20260417_222320 from './20260417_222320';
import * as migration_20260419_160233 from './20260419_160233';
import * as migration_20260420_213650 from './20260420_213650';
import * as migration_20260425_182739 from './20260425_182739';
import * as migration_20260426_114713 from './20260426_114713';
import * as migration_20260427_232238 from './20260427_232238';
import * as migration_20260427_232747 from './20260427_232747';
import * as migration_20260428_000102 from './20260428_000102';
import * as migration_20260430_005618 from './20260430_005618';
import * as migration_20260501_140236 from './20260501_140236';
import * as migration_20260502_210249 from './20260502_210249';

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
    name: '20260426_114713',
  },
  {
    up: migration_20260427_232238.up,
    down: migration_20260427_232238.down,
    name: '20260427_232238',
  },
  {
    up: migration_20260427_232747.up,
    down: migration_20260427_232747.down,
    name: '20260427_232747',
  },
  {
    up: migration_20260428_000102.up,
    down: migration_20260428_000102.down,
    name: '20260428_000102',
  },
  {
    up: migration_20260430_005618.up,
    down: migration_20260430_005618.down,
    name: '20260430_005618',
  },
  {
    up: migration_20260501_140236.up,
    down: migration_20260501_140236.down,
    name: '20260501_140236',
  },
  {
    up: migration_20260502_210249.up,
    down: migration_20260502_210249.down,
    name: '20260502_210249'
  },
];
