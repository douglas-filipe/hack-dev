export interface UserProviderData {
  user: UserData[];
  updateUser: () => Promise<void>;
  getUser: () => Promise<void>;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  points: number;
  avatar_id: number;
  event_id: number;
  address: UserAddress;
  
}

export interface UserAddress {
  id: number;
  city: string;
  street: string;
  number: number;
  district: number;
  state: string;
  zip_code: string;
}
