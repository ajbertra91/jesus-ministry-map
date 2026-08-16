export type ParableGospel = 'Matthew' | 'Mark' | 'Luke' | 'John';

export type ParableRef = {
  gospel: ParableGospel;
  ref: string;
};

export type Parable = {
  id: string;
  title: string;
  branchId: string;
  refs: ParableRef[];
  summary: string;
};

export type ParableBranch = {
  id: string;
  label: string;
  tagline: string;
  parableIds: string[];
};

export type ParablesResponse = {
  branches: ParableBranch[];
  parables: Parable[];
};
