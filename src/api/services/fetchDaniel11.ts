import { createAPIMethod } from './createAPIMethod.ts';
import { serviceRegistry } from './serviceRegistry.ts';
import type { Daniel11Response } from '../../types';

export const fetchDaniel11 = createAPIMethod<{}, Daniel11Response>({
  method: 'GET',
  url: serviceRegistry.DANIEL11,
});
