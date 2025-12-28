export type JesusEventGroup = {
  label: string;
  events: string[];
};
export type JesusEventListItem = {
  eventGroup: JesusEventGroup;
};

export type JesusEventList = JesusEventListItem[];

export type JesusYear = {
  id: string;
  timeLine: string;
  eventList: JesusEventList;
};

export type JesusResponse = {
  year: JesusYear[];
};