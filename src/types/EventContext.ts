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








export interface UserData {
  id: number;
  name: string;
  email: string;
  address: any;
  event: EventData | null;
  points: number; 
  group: any;
  feedbacks: any[];
}