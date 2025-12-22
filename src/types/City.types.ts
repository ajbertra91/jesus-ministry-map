export type Reference = {
  [book: string]: string[];
}

export type ScriptureReferences = {
  oldTestament: Reference;
  newTestament: Reference;
  prophecies: Reference;
};

export type CityResponse = {
  id: string;
  title: string;
  description?: string;
  population?: number;
  founded?: string;
  scriptureReferences?: ScriptureReferences;
}