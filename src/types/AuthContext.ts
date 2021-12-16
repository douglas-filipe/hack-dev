import { ReactNode } from "react";
import { EventData } from "./EventContext";

export interface AuthProviderData {
  userId: string;
  token: string;
  reqLogin: (Data: DataForm) => void;
  setToken: (token: string) => void;
  setUserId: (token: string) => void;
}

export interface ContextProp {
  children: ReactNode;
}

export interface DataForm {
  email: string;
  password?: string;
  name?: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  address: any;
  event: EventData;
  group: any;
  feedbacks: any[];
}
