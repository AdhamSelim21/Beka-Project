import * as migration_20260410_204257 from './20260410_204257';
import * as migration_20260410_223817 from './20260410_223817';
import * as migration_20260410_225217 from './20260410_225217';
import * as migration_20260413_190248 from './20260413_190248';
import * as migration_20260413_214221 from './20260413_214221';
import * as migration_20260414_170714 from './20260414_170714';
import * as migration_20260414_181656 from './20260414_181656';
import * as migration_20260414_183946 from './20260414_183946';

export const migrations = [
  {
    up: migration_20260410_204257.up,
    down: migration_20260410_204257.down,
    name: '20260410_204257',
  },
  {
    up: migration_20260410_223817.up,
    down: migration_20260410_223817.down,
    name: '20260410_223817',
  },
  {
    up: migration_20260410_225217.up,
    down: migration_20260410_225217.down,
    name: '20260410_225217',
  },
  {
    up: migration_20260413_190248.up,
    down: migration_20260413_190248.down,
    name: '20260413_190248',
  },
  {
    up: migration_20260413_214221.up,
    down: migration_20260413_214221.down,
    name: '20260413_214221',
  },
  {
    up: migration_20260414_170714.up,
    down: migration_20260414_170714.down,
    name: '20260414_170714',
  },
  {
    up: migration_20260414_181656.up,
    down: migration_20260414_181656.down,
    name: '20260414_181656',
  },
  {
    up: migration_20260414_183946.up,
    down: migration_20260414_183946.down,
    name: '20260414_183946'
  },
];
