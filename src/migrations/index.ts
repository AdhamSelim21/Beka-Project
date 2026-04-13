import * as migration_20260410_204257 from './20260410_204257';
import * as migration_20260410_223817 from './20260410_223817';
import * as migration_20260410_225217 from './20260410_225217';
import * as migration_20260413_190248 from './20260413_190248';

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
    name: '20260413_190248'
  },
];
