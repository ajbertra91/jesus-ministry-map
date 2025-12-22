import { createAPIMethod } from './createAPIMethod.ts';
import { serviceRegistry } from './serviceRegistry.ts';
import type { KingsResponse } from '../../types/King.types.ts';

export const fetchKings = createAPIMethod<{}, KingsResponse>({
  method: 'GET',
  url: serviceRegistry.KINGS,
});
