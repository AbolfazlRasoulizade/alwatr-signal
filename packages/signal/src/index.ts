import {globalAlwatr} from '@alwatr/logger';

export * from './simple-signal.js';
export * from './signal.js';
export * from './context.js';
export * from './multithread-context.js';
export * from './type.js';

globalAlwatr.registeredList.push({
  name: '@alwatr/signal',
  version: _ALWATR_VERSION_,
});
