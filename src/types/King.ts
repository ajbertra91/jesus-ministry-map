// Types updated to match the JSON shape provided (hyphenated keys and grouped under `kings`).
export type King = {
  name: string;
  kingdom: string;
  reignStart: string;
  reignEnd: string;
  dynasty?: string;
  notableEvents?: string[];
  scriptures?: string[];
  prophets?: string[];
  highPriests?: string[];
  godly?: boolean;
};

export type KingsByKingdom = {
  kingdomOfIsrael: King[];
  kingdomOfJudah: King[];
};

export type KingsResponse = {
  kings: KingsByKingdom;
};