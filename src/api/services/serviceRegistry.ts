// API paths used by the client. MSW handlers expect the "/api/*" prefix,
// so expose the same routes here.
const CITIES = '/api/cities';
const DANIEL11 = '/api/daniel11';
const JESUS = '/api/jesus';
const KINGS = '/api/kings';

export const serviceRegistry = {
  CITIES,
  DANIEL11,
  JESUS,
  KINGS,
};