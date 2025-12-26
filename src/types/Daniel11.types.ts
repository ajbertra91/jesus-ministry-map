export type Entry = {
  verses: string;
  prophecy: string;
  historicalFulfillment: string | string[];
  kjvText: string;
  figures: string[];
  dates: string;
  imgName?: string;
}

export type Daniel11Response = {
  book: string,
  chapter: number,
  interpretiveFramework: string,
  entries: Entry[];
}