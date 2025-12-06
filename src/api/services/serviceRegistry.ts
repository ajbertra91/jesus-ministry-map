// API paths used by the client. MSW handlers expect the "/api/*" prefix,
// so expose the same routes here.
const KINGS = '/api/kings';
const CITIES = '/api/cities';

export const serviceRegistry = {
  KINGS,
  CITIES,
};