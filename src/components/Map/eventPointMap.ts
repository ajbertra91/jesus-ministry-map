// Generated mapping from event (groupLabel::index) -> SVG data-point id
// Matches were derived from public/Map-of-1st-Century-Iudaea3.svg where possible.
const entries: Array<[string, string]> = [
  // Year 1
  ["Opening Events::0", "Nazareth"],
  ["Opening Events::1", "Bethany"],
  ["Opening Events::2", "Wilderness-of-Judea"],
  ["Opening Events::3", "Bethany"],
  ["Opening Events::4", "Cana"],
  ["Opening Events::5", "Capernaum"],

  ["Early Ministry In Judea Samaria And Galilee::0", "Jerusalem"],
  ["Early Ministry In Judea Samaria And Galilee::1", "Judaea"],
  ["Early Ministry In Judea Samaria And Galilee::2", "Sychar"],
  ["Early Ministry In Judea Samaria And Galilee::3", "Cana"],
  ["Early Ministry In Judea Samaria And Galilee::4", "Nazareth"],

  // Year 2
  ["First Preaching Tour Of Galilee::0", "Capernaum"],
  ["First Preaching Tour Of Galilee::1", "Galilee"],
  ["First Preaching Tour Of Galilee::2", "Capernaum"],
  ["First Preaching Tour Of Galilee::3", "Jerusalem"],
  ["First Preaching Tour Of Galilee::4", "Galilee"],
  ["First Preaching Tour Of Galilee::5", "Capernaum"],
  ["First Preaching Tour Of Galilee::6", "Capernaum"],

  ["Second Preaching Tour Of Galilee::0", "Galilee"],
  ["Second Preaching Tour Of Galilee::1", "Galilee"],
  ["Second Preaching Tour Of Galilee::2", "Region-of-the-Gerasenes"],
  ["Second Preaching Tour Of Galilee::3", "Capernaum"],

  // Year 3
  ["Third Preaching Tour Of Galilee::0", "Nazareth"],
  ["Third Preaching Tour Of Galilee::1", "Nazareth"],
  ["Third Preaching Tour Of Galilee::2", "Capernaum"],
  ["Third Preaching Tour Of Galilee::3", "Capernaum"],
  ["Third Preaching Tour Of Galilee::4", "Bethsaida"],
  ["Third Preaching Tour Of Galilee::5", "Region-of-the-Gerasenes"],
  ["Third Preaching Tour Of Galilee::6", "Capernaum"],

  ["Jesus Preaches And Heals In Syrian Phoenicia Iturea And Trachonitis The Decapolis::0", "Tyre"],
  ["Jesus Preaches And Heals In Syrian Phoenicia Iturea And Trachonitis The Decapolis::1", "Sidon"],
  ["Jesus Preaches And Heals In Syrian Phoenicia Iturea And Trachonitis The Decapolis::2", "Decapolis"],
  ["Jesus Preaches And Heals In Syrian Phoenicia Iturea And Trachonitis The Decapolis::3", "Capernaum"],
  ["Jesus Preaches And Heals In Syrian Phoenicia Iturea And Trachonitis The Decapolis::4", "Bethsaida"],
  ["Jesus Preaches And Heals In Syrian Phoenicia Iturea And Trachonitis The Decapolis::5", "Caesarea-Philippi"],
  ["Jesus Preaches And Heals In Syrian Phoenicia Iturea And Trachonitis The Decapolis::6", "Mt-Hermon"],
  ["Jesus Preaches And Heals In Syrian Phoenicia Iturea And Trachonitis The Decapolis::7", "Galilee"],
  ["Jesus Preaches And Heals In Syrian Phoenicia Iturea And Trachonitis The Decapolis::8", "Capernaum"],

  ["Later Ministry In Judea::0", "Samaria"],
  ["Later Ministry In Judea::1", "Jerusalem"],
  ["Later Ministry In Judea::2", "Jerusalem"],

  ["The Last Few Months::0", "Bethany"],
  ["The Last Few Months::1", "Jerusalem"],
  ["The Last Few Months::2", "Ephraim"],

  ["His Ministry In Perea Modern Jordan::0", "Peraea"],

  ["The Final Journey To Jerusalem::0", "Jericho"],
  ["The Final Journey To Jerusalem::1", "Jerusalem"],
  ["The Final Journey To Jerusalem::2", "Jerusalem"],
];

export const eventPointMap = new Map<string, string>(entries);

export const getPointFor = (groupLabel: string, index: number) => {
  return eventPointMap.get(`${groupLabel}::${index}`) ?? '';
};

export default eventPointMap;
