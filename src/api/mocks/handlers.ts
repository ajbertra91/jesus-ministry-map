import { http } from 'msw';

import citiesData from '../data/cities/cities.json';
import kingsData from '../data/kings/kings.json';

export const handlers = [
  http.get('/api/cities', ({ request }) => {
    const url = new URL(request.url);
    const city = url.searchParams.get('city');

    if (!city) {
      return new Response(JSON.stringify({ error: 'City not specified' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const cityInfo = JSON.parse(JSON.stringify(citiesData))[city];
    if (!cityInfo) {
      return new Response(JSON.stringify({ error: 'City not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify(cityInfo), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }),

  // GET /api/kings -> returns the kings JSON
  http.get('/api/kings', () => {
    return new Response(JSON.stringify(kingsData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }),

  // Add more handlers here.
];