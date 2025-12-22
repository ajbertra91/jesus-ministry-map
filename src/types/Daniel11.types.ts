export type Entry = {
  verses: string;
  prophecy: string;
  historicalFulfillment: string;
  kjvText: string;
  figures: string[];
  dates: string;
}

export type Daniel11Response = {
  book: string,
  chapter: number,
  interpretiveFramework: string,
  entries: Entry[];
}