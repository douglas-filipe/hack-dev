import { ReactNode } from "react";

export interface AuthProviderData {
  userId: string;
  token: string;
}

export interface ContextProp {
  children: ReactNode;
}
