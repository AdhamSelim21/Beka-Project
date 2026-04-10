import * as migration_20260409_192413 from './20260409_192413';

export const migrations = [
  {
    up: migration_20260409_192413.up,
    down: migration_20260409_192413.down,
    name: '20260409_192413'
  },
];
