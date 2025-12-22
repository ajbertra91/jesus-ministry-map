import { createAPIMethod } from './createAPIMethod.ts';
import { serviceRegistry } from './serviceRegistry.ts';
import type { CityResponse } from '../../types/City.types.ts';

export const fetchCity = createAPIMethod<{
  city: string;
}, CityResponse>({
  method: 'GET',
  url: serviceRegistry.CITIES,
});
