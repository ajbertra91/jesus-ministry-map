import { createAPIMethod } from './createAPIMethod.ts';
import { serviceRegistry } from './serviceRegistry.ts';
import type { JesusResponse } from '../../types/index.ts';

export const fetchJesus = createAPIMethod<{}, JesusResponse>({
  method: 'GET',
  url: serviceRegistry.JESUS,
});
