export interface EventProviderData {
  events: EventData[];
}

export interface EventData {
  id: number;
  name: string;
  description: string;
  date: string;
  duration: string;
  skills: string;
  pending: boolean;
}
