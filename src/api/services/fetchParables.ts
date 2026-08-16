import { createAPIMethod } from './createAPIMethod.ts';
import { serviceRegistry } from './serviceRegistry.ts';
import type { ParablesResponse } from '../../types';

export const fetchParables = createAPIMethod<{}, ParablesResponse>({
  method: 'GET',
  url: serviceRegistry.PARABLES,
});
